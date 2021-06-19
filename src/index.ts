import * as H from 'history';

import { default as useSwitchTabs } from './useSwitchTabs';
import { withSwitchTab } from './utils';
import { Mode } from './config'
import type { UseSwitchTabsOptions, ActionType } from './useSwitchTabs';

interface SwitchTab {
  title: React.ReactNode;
  key: string;
  content: JSX.Element;
  closable?: boolean;
  location: Omit<H.Location, 'key'>;
}

type RoughLocation = Omit<H.Location, 'key'>;

export type { UseSwitchTabsOptions, SwitchTab, RoughLocation, ActionType };

export { useSwitchTabs, withSwitchTab, Mode };

export default useSwitchTabs;
