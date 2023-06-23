export interface RootState {
  currentUser: string;
  error: string;
  loading: boolean;
  activeTab: Tabs;
}

export interface OrdersState {
  orders: Orders[];
  loading: boolean;
  error: string;
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

export interface Food {
  id: number;
  name: string;
  image: string;
  price: string;
}

export interface Foods {
  id: number;
  foodCount: number;
  food: Food;
}

interface Order {
  id: number;
  createdAt: string;
  userName: string;
  userPhone: string;
  userAddress: string;
  paymentMethod: string;
  comment: string;
  totalAmount: string;
  foods: Foods[];
}

export interface Orders {
  [key: string]: Order[];
}
