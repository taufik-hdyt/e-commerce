export interface INavbarItem {
  readonly link?: string;
  readonly icon?: string;
  readonly isSelected?: boolean;
  readonly isTarget?: boolean;
  readonly isAnchor?: boolean;
}

export interface INavbar {
  readonly menuSelected?: string;
  readonly subMenuSelected?: string;
  readonly addToBag?: boolean;
}
