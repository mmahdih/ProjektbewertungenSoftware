
interface sideItem {
label: string;
      route: string;
      icon?: string;
}

export interface SidebarItem {
  label: string;
  route: string;
  icon?: string;
  subMenu?: sideItem[];
}
