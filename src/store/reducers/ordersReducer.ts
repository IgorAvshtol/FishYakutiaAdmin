import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetOrders, OrdersState } from '@/interfaces';

export const initialState: OrdersState = {
  orders: [],
  totalOrdersPages: 1,
  loading: false,
  error: '',
};

export const ordersReducer = createSlice({
  name: 'ordersReducer',
  initialState,
  reducers: {
    getOrdersPending: (state) => {
      state.loading = true;
      state.error = '';
    },
    getOrdersSuccess: (state, action: PayloadAction<GetOrders>) => {
      state.loading = false;
      state.error = '';
      state.orders = action.payload.orders;
      state.totalOrdersPages = action.payload.totalOrders;
    },
    getOrdersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getOrdersPending,
  getOrdersSuccess,
  getOrdersFailure,
} = ordersReducer.actions;
