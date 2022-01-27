import { createContext, useContext } from 'react';

export interface TabsContextProps {
  activeItem: string;
  onClick: (item: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export const useTabs = (): TabsContextProps => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }

  return context;
};

export default TabsContext;
