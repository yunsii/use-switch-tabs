declare module 'hash-string';

interface Window {
  reloadTab: (path?: string) => void;
  /** 如果已经打开的标签页会触发 callback ，如果 force 为 true ，总会调用 callback */
  goBackTab: (path?: string, callback?: () => void, force?: boolean) => void;
  /** 关闭后自动切换到附近的标签页，如果是最后一个标签页不可删除 */
  closeTab: (path?: string, callback?: () => void, force?: boolean) => void;
  closeAndGoBackTab: (path?: string, callback?: () => void, force?: boolean) => void;
}
