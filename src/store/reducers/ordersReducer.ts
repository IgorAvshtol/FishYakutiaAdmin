import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Orders, OrdersState } from '@/interfaces';

export const initialState: OrdersState = {
  orders: [],
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
    getOrdersSuccess: (state, action: PayloadAction<Orders[]>) => {
      state.loading = false;
      state.error = '';
      state.orders = action.payload;
    },
    getOrdersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getOrders = createAction('GET_ORDERS');


export const {
  getOrdersPending,
  getOrdersSuccess,
  getOrdersFailure,
} = ordersReducer.actions;
