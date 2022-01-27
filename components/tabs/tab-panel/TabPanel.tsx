import classNames from 'classnames';
import { FC } from 'react';

export interface TabPanelProps {
  activeItem: string;
  index: string;
  className?: string;
}

const defaultProps = { className: '' };

const TabPanel: FC<TabPanelProps> = ({ activeItem, index, className, children }) => {
  const tabPanelClassName = classNames('text-content py-10 mt-2', className);
  return activeItem === index ? <div className={tabPanelClassName}>{children}</div> : null;
};

TabPanel.defaultProps = defaultProps;

export default TabPanel;
