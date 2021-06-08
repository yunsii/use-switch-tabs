import * as H from 'history';

import { default as useSwitchTabs } from './useSwitchTabs';

export interface SwitchTab {
  title: React.ReactNode;
  key: string;
  content: JSX.Element;
  closable?: boolean;
  location: Omit<H.Location, 'key'>;
}

export type RoughLocation = Omit<H.Location, 'key'>;

export { useSwitchTabs };

export default useSwitchTabs;
