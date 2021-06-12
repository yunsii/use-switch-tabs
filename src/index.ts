import * as H from 'history';

import { default as useSwitchTabs } from './useSwitchTabs';
import { withSwitchTab } from './utils';
import type { UseSwitchTabsOptions } from './useSwitchTabs';

interface SwitchTab {
  title: React.ReactNode;
  key: string;
  content: JSX.Element;
  closable?: boolean;
  location: Omit<H.Location, 'key'>;
}

type RoughLocation = Omit<H.Location, 'key'>;

export type { UseSwitchTabsOptions, SwitchTab, RoughLocation };

export { useSwitchTabs, withSwitchTab };

export default useSwitchTabs;
