import Menu from 'components/panels/menu/Menu';
import { FC } from 'react';

export interface TabProps {
  name: string;
  content?: string;
  className?: string;
  disabled?: boolean;
}

const Tab: FC<TabProps> = ({ name, content, className, disabled, children }) => {
  return (
    <Menu.Item disabled={disabled} name={name} content={content} className={className}>
      {children}
    </Menu.Item>
  );
};

export default Tab;
