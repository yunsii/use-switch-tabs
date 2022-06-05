import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useLocalStorageState, useMemoizedFn, usePrevious } from 'ahooks';
import _find from 'lodash/find';
import _findIndex from 'lodash/findIndex';
import _isEqual from 'lodash/isEqual';
import _omit from 'lodash/omit';
import _get from 'lodash/get';
import _isArray from 'lodash/isArray';
import * as H from 'history';

import { getRenderRoute, getRenderRouteKey } from './utils';
import { Mode } from './config';
import { SwitchTab, RoughLocation } from '.';

export interface RouteConfig {
  /** 子路由 */
  children?: RouteConfig[];
  /** 子路由 */
  routes?: RouteConfig[];
  /** 在菜单中隐藏子节点 */
  hideChildrenInMenu?: boolean;
  /** 在菜单中隐藏自己和子节点 */
  hideInMenu?: boolean;
  /** 菜单的名字 */
  name?: string;
  /** 路径 */
  path?: string;
  /** 配置该路由标签页紧跟指定的某个路由 */
  follow?: string;
  /** 重定向 */
  redirect?: string;
  component?: React.ComponentType<{ location: H.Location }>;
}

export interface RenderRoute extends Omit<RouteConfig, 'name'> {
  renderKey: string;
  /** Mode.Dynamic 会计算路由参数的 hash 值 */
  hash?: string;
  name?: React.ReactNode;
}

export interface SetTabNamePayload {
  path: string;
  name?: string;
  params: any;
  location: RoughLocation;
}

export type SetTabNameFn = (payload: SetTabNamePayload) => React.ReactNode | void;

export type ListenActiveChangeCallback = (activeKey: string) => void;

export interface ActionType {
  reloadTab: (path?: string) => void;
  /** 如果已经打开的标签页会触发 callback ，如果 force 为 true ，总会调用 callback */
  goBackTab: (path?: string, callback?: () => void, force?: boolean) => void;
  /** 关闭后自动切换到附近的标签页，如果是最后一个标签页不可删除 */
  closeTab: (path?: string, callback?: () => void, force?: boolean) => void;
  closeAndGoBackTab: (path?: string, callback?: () => void, force?: boolean) => void;
  /** 获取 location 对应的 tabKey，如果没有入参，返回当前激活的 tabKey */
  getTabKey: (location?: RoughLocation) => string;
  /** 监听 activeKey 变化事件 */
  listenActiveChange: (callback: ListenActiveChangeCallback) => () => void;
}

export interface UseSwitchTabsOptions {
  mode?: Mode;
  /** tabs 持久化 */
  persistent?:
    | {
        /** 是否强制渲染，参考 [Tabs.TabPane.forceRender](https://ant.design/components/tabs-cn/#Tabs.TabPane) */
        force?: boolean;
        /**
         * 持久化时在 localStorage 中的名称，默认为 tabLocations。
         * 已知多个项目部署在非根目录需要通过 cacheName 区分，否则会在导致标签页渲染异常。
         */
        cacheName?: string;
      }
    | boolean;
  children: JSX.Element;
  originalRoutes: RouteConfig[];
  location: H.Location;
  history: Pick<H.History, 'push'>;
  actionRef?: React.MutableRefObject<ActionType | undefined> | ((actionRef: ActionType) => void);
  onCreateTab?: (tabKey: string) => void;

  /** Mode.Dynamic 时可用  */
  setTabName?: SetTabNameFn;
}

function useSwitchTabs(options: UseSwitchTabsOptions) {
  const {
    mode = Mode.Route,
    originalRoutes,
    persistent,
    location,
    history,
    children,
    actionRef: propsActionRef,
    setTabName,
  } = options;
  const currentTabLocation = _omit(location, ['key']);
  console.log('currentTabLocation', currentTabLocation);
  const cacheName = _get(persistent, 'cacheName', 'tabLocations');

  const actionRef = useRef<ActionType>();
  const [tabLocations, setTabLocations] = useLocalStorageState<SwitchTab['location'][]>(cacheName, {
    defaultValue: [],
  });
  const [tabs, setTabs] = useState<SwitchTab[]>(() => {
    if (persistent && _isArray(tabLocations) && tabLocations.length) {
      return tabLocations.map((tabLocation) => {
        const renderRoute = getRenderRoute({
          location: tabLocation,
          mode,
          originalRoutes,
          setTabName,
        });
        return {
          title: renderRoute.name,
          key: getRenderRouteKey(renderRoute, mode),
          content: React.cloneElement(children!, {
            location: tabLocation,
          }),
          location: tabLocation,
        };
      });
    }
    return [];
  });
  const listenChangeEventsRef = useRef<ListenActiveChangeCallback[]>([]);

  const currentRenderRoute = getRenderRoute({
    location: currentTabLocation,
    mode,
    originalRoutes,
    setTabName,
  });
  console.log('currentRenderRoute', currentRenderRoute);

  const currentTabKey = useMemo(() => {
    return getRenderRouteKey(currentRenderRoute, mode);
  }, [mode, currentRenderRoute]);

  const prevActiveKey = usePrevious(currentTabKey, (prev, next) => prev !== next);

  const getTab = useMemoizedFn((tabKey: string) => _find(tabs, { key: tabKey }));

  const processTabs = useMemoizedFn((_tabs: SwitchTab[]) => {
    return _tabs.map((item) => (_tabs.length === 1 ? { ...item, closable: false } : item));
  });

  /** 获取激活标签页的相邻标签页 */
  const getNextTab = useMemoizedFn(() => {
    const removeIndex = _findIndex(tabs, { key: currentTabKey });
    const nextIndex = removeIndex >= 1 ? removeIndex - 1 : removeIndex + 1;
    return tabs[nextIndex];
  });

  /**
   * force: 是否在目标标签页不存在的时候强制回调函数
   */
  const handleSwitch = useMemoizedFn((keyToSwitch: string, callback?: () => void, force: boolean = false) => {
    if (!keyToSwitch) {
      return;
    }

    /**
     * `keyToSwitch` 有值时，`targetTab` 可能为空。
     *
     * 如：一个会调用 `window.closeAndGoBackTab(path)` 的页面在 F5 刷新之后
     */
    const targetTab = getTab(keyToSwitch);
    if (targetTab) {
      history.push(targetTab.location);
    } else {
      history.push(keyToSwitch);
    }

    if (force) {
      callback?.();
    } else {
      targetTab && callback?.();
    }
  });

  /** 删除标签页处理事件，可接收一个 `nextTabKey` 参数，自定义需要返回的标签页 */
  const handleRemove = useMemoizedFn(
    (removeKey: string, nextTabKey?: string, callback?: () => void, force?: boolean) => {
      if (tabs.length === 1) {
        console.warn('the final tab, can not remove.');
        return;
      }

      const getNextTabKeyByRemove = () => (removeKey === currentTabKey ? getNextTab()?.key : currentTabKey);

      handleSwitch(nextTabKey || getNextTabKeyByRemove(), callback, force);
      setTabs((prevTabs) => processTabs(prevTabs.filter((item) => item.key !== removeKey)));
    }
  );

  const handleRemoveOthers = useMemoizedFn((currentKey: string, callback?: () => void) => {
    handleSwitch(currentKey, callback);
    setTabs((prevTabs) => {
      return processTabs(prevTabs.filter((item) => item.key === currentKey));
    });
  });

  const handleRemoveRightTabs = useMemoizedFn((currentKey: string, callback?: () => void) => {
    handleSwitch(getTab(currentKey)!.key, callback);
    setTabs((prevTabs) => {
      return processTabs(prevTabs.slice(0, _findIndex(prevTabs, { key: currentKey }) + 1));
    });
  });

  /**
   * 新增第一个 tab 不可删除
   *
   * @param newTab
   */
  const addTab = useMemoizedFn((newTab: SwitchTab, follow?: string) => {
    setTabs((prevTabs) => {
      let result = [...prevTabs];
      if (follow) {
        const targetIndex = _findIndex(prevTabs, (tab) => {
          if (mode === Mode.Route) {
            return tab.key === follow;
          }
          const followReg = new RegExp(`^${follow}`);
          return followReg.test(tab.key);
        });
        if (targetIndex >= 0) {
          result.splice(targetIndex + 1, 0, newTab);
        } else {
          result = [...result, newTab];
        }
      } else {
        result = [...result, newTab];
      }

      return result.map((item, index) =>
        tabs.length === 0 && index === 0 ? { ...item, closable: false } : { ...item, closable: true }
      );
    });
  });

  /**
   * 重载标签页，传入参数重写相关属性
   *
   * @param reloadKey 需要刷新的 tab key
   * @param tabTitle 需要刷新的 tab 标题
   * @param location 需要刷新的 tab location
   * @param content 需要刷新的 tab 渲染的内容
   */
  const reloadTab = useMemoizedFn(
    (
      reloadKey: string = currentTabKey,
      tabTitle?: React.ReactNode,
      tabLocation?: SwitchTab['location'],
      content?: JSX.Element
    ) => {
      if (tabs.length < 1) {
        return;
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`reload tab key: ${reloadKey}`);
      }
      const updatedTabs = tabs.map((item) => {
        if (item.key === reloadKey) {
          const { title: prevTabTitle, location: prevLocation, content: prevContent, ...rest } = item;
          return {
            ...rest,
            title: tabTitle || prevTabTitle,
            location: tabLocation || prevLocation,
            content: content || React.cloneElement(item.content as JSX.Element, { key: new Date().valueOf() }),
          } as SwitchTab;
        }
        return item;
      });

      setTabs(updatedTabs);
    }
  );

  const goBackTab = useMemoizedFn((path?: string, callback?: () => void, force?: boolean) => {
    if (!path && (!prevActiveKey || !getTab(prevActiveKey))) {
      console.warn('go back failed, no previous activated key or previous tab is closed.');
      return;
    }

    handleSwitch(path || prevActiveKey!, callback, force);
  });

  /** 关闭后自动切换到附近的标签页，如果是最后一个标签页不可删除 */
  const closeTab = useMemoizedFn((path?: string, callback?: () => void, force?: boolean) => {
    if (path && !getTab(path)) {
      console.warn('close failed, target tab is closed.');
      return;
    }

    handleRemove(path || currentTabKey, undefined, callback, force);
  });

  /** 关闭当前标签页并返回到上次打开的标签页 */
  const closeAndGoBackTab = useMemoizedFn((path?: string, callback?: () => void, force?: boolean) => {
    if (!path && (!prevActiveKey || !getTab(prevActiveKey))) {
      console.warn('close and go back failed, no previous activated key or previous tab is closed.');
      return;
    }

    handleRemove(currentTabKey, path || prevActiveKey, callback, force);
  });

  const getTabKey = useMemoizedFn((roughLocation: RoughLocation = currentTabLocation) => {
    const roughRenderRoute = getRenderRoute({
      location: roughLocation,
      mode,
      originalRoutes,
      setTabName,
    });

    return getRenderRouteKey(roughRenderRoute, mode);
  });

  const listenActiveChange = useMemoizedFn((callback: ListenActiveChangeCallback) => {
    listenChangeEventsRef.current.push(callback);

    return () => {
      listenChangeEventsRef.current.filter((item) => item !== callback);
    };
  });

  useEffect(() => {
    if (persistent) {
      setTabLocations(tabs.map((item) => item.location));
      return;
    }
    if (tabLocations) {
      setTabLocations();
    }
  }, [persistent, tabs]);

  useEffect(() => {
    actionRef.current = {
      reloadTab,
      goBackTab,
      closeTab,
      closeAndGoBackTab,
      getTabKey,
      listenActiveChange,
    };

    return () => {
      const hint = () => {
        console.warn(`useSwitchTabs had unmounted.`);
      };

      actionRef.current = {
        reloadTab: hint,
        goBackTab: hint,
        closeTab: hint,
        closeAndGoBackTab: hint,
        getTabKey: () => {
          hint();
          return '';
        },
        listenActiveChange: () => {
          hint();
          return () => {};
        },
      };
    };
  }, []);

  useEffect(() => {
    const activatedTab = getTab(currentTabKey);

    if (activatedTab) {
      const { location: prevTabLocation } = activatedTab;
      if (!_isEqual(currentTabLocation, prevTabLocation)) {
        reloadTab(currentTabKey, currentRenderRoute.name, currentTabLocation, children);
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log(`no effect of tab key: ${currentTabKey}`);
        }
      }

      listenChangeEventsRef.current.map((callback) => {
        callback(currentTabKey);
      });
    } else {
      const newTab = {
        title: currentRenderRoute.name,
        key: currentTabKey,
        content: children as any,
        location: currentTabLocation,
      };

      const { follow } = currentRenderRoute || {};

      if (process.env.NODE_ENV === 'development') {
        console.log(`add tab key: ${currentTabKey}`);
      }
      addTab(newTab, follow);
    }

    // 不可将当前 location 作为依赖，否则在操作非当前 location 对应的标签页时会有异常
    // 比如在非当前 location 对应的标签页的标签菜单中触发删除其他标签页，会导致本应只有一个标签页时，
    // 但会再次创建一个当前 location 对应的标签页
  }, [children, currentTabKey]);

  useEffect(() => {
    if (!propsActionRef) {
      return;
    }

    if (typeof propsActionRef === 'function') {
      propsActionRef(actionRef.current);
    } else {
      propsActionRef.current = actionRef.current;
    }
  }, []);

  return {
    tabs,
    activeKey: currentTabKey,
    handleSwitch,
    handleRemove,
    handleRemoveOthers,
    handleRemoveRightTabs,
  };
}

export default useSwitchTabs;
