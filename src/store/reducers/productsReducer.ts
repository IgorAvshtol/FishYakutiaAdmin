import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food, GetProducts, ProductsState } from '@/interfaces';

export const initialState: ProductsState = {
  products: [],
  totalProductsPages: 1,
  loading: false,
  error: '',
  createProductError: ''
};

export const productsReducer = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {
    getProductsPending: (state) => {
      state.loading = true;
      state.error = '';
    },
    getProductsSuccess: (state, action: PayloadAction<GetProducts>) => {
      state.loading = false;
      state.error = '';
      state.products = action.payload.foods;
      state.totalProductsPages = action.payload.totalFoodsPages;
    },
    getProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    createProductsSuccess: (state, action: PayloadAction<Food>) => {
      state.createProductError = '';
      state.products.push(action.payload);
    },
    createProductsFailure: (state, action: PayloadAction<string>) => {
      state.createProductError = action.payload;
    },
  },
});

export const {
  getProductsPending,
  getProductsSuccess,
  getProductsFailure,
  createProductsSuccess,
  createProductsFailure
} = productsReducer.actions;
