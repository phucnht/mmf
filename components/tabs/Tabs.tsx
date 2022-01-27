import { ReactNode } from 'react';
import { Menu } from '..';

import TabPanel from './tab-panel/TabPanel';
import Tab from './tab/Tab';
import { TabsContextProps } from './TabsContext';
interface TabsProps {
  direction: 'vertical' | 'horizontal';
  className: string;
  children: ReactNode;
}

const defaultProps = { direction: 'vertical', className: '' };

const Tabs = ({ activeItem, onClick, direction, className, children }: TabsProps & TabsContextProps) => {
  return (
    <Menu activeItem={activeItem} onClick={onClick} direction={direction} className={className}>
      {children}
    </Menu>
  );
};

Tabs.defaultProps = defaultProps;

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;
