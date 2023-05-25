export interface ILayout {
  readonly children?: any;
  readonly pageTitle?: string;
  readonly isNoHeader?: boolean;
  readonly menuSelected?: string;
  readonly isNavbarTop?: boolean;
  readonly isNoNavbar?: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  icon: string;
  description: string;
}
