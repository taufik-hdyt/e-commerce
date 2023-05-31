export interface INavbarItem {
  readonly link?: string;
  readonly icon?: string;
  readonly isSelected?: boolean;
}

export interface INavbar {
  readonly menuSelected?: string;
}
