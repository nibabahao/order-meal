export interface MenuType {
  name: string;
  tid: string;
}

export interface MenuGroup {
  title: string;
  tid: string;
  item: MenuItem[];
}

export interface MenuItem {
  name: string;
  tid: string;
  fid: string;
  price: string;
  img: string;
}

export interface CartData extends MenuItem {
  quantity?: number;
}

export interface Coordinate {
  x: number;
  y: number;
}
