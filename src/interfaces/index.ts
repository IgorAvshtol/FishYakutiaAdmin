export interface RootState {
  currentUser: string;
  error: string;
  loading: boolean;
  activeTab: Tabs;
}

export interface FormData {
  email: string;
  password: string;
}

export enum Tabs {
  ORDERS = '/orders',
  MENU = '/menu',
  SETTINGS = '/settings',
}
