export interface RootState {
  currentUser: string;
  error: string;
  loading: boolean;
  activeTab: Tabs;
}

export interface OrdersState {
  orders: Orders[];
  totalOrdersPages: number;
  loading: boolean;
  error: string;
}

export interface ProductsState {
  products: Food[];
  totalProductsPages: number;
  loading: boolean;
  error: string;
  createProductError: string;
}

export interface ModalsState {
  modal: ModalsType | null;
}

export interface CategoriesState {
  categories: Category[];
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

export enum ModalsType {
  ADD_CATEGORY = 'ADD_CATEGORY',
  EDIT_CATEGORIES = 'EDIT_CATEGORIES',
  ADD_PRODUCT = 'ADD_PRODUCT',
}

interface FoodImage {
  id: number;
  filename: string;
  path: string;
}

export interface Food {
  id: number;
  name: string;
  images: FoodImage[];
  price: string;
  category: Category;
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

export interface GetOrders {
  orders: Orders[];
  totalOrders: number;
}

export interface GetProducts {
  foods: Food[];
  totalFoodsPages: number;
}

export interface Category {
  id: number;
  title: string;
}

export interface CreateCategoryData {
  title: string;
}

export interface CreateCategoryResponseData {
  id: number;
  title: string;
}

export interface CreateProductData {
  name: string;
  image: File;
  price: string;
  categoryId: string;
}

export interface CreateProductResponseData {
  id: number;
  name: string;
  images: FoodImage[];
  price: string;
  categoryId: string;
}
