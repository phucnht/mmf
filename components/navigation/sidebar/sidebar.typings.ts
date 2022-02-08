import { ReactNode } from 'react';

export interface SidebarRouteProps {
  slug: string;
  label: string;
  icon?: string | StaticImageData;
}

export interface SidebarRoutesProps {
  routes: SidebarRouteProps[];
  defaultSlug: string;
  levelSlug?: number; // for default route active
  children: ReactNode;
}