import { ReactNode } from 'react';

export interface SidebarRouteProps {
  slug: string;
  label: string;
  icon?: string | StaticImageData;
  disabled?: boolean;
}

export interface SidebarRoutesProps {
  routes: SidebarRouteProps[];
  baseSlug: string;
  className?: string;
  levelSlug?: number; // for default route active
  children?: ReactNode;
}
