import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, Tabs } from '@/interfaces';

export const initialState: RootState = {
  currentUser: '',
  error: '',
  loading: false,
  activeTab: Tabs.ORDERS,
};

export const rootReducer = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.loading = true;
      state.error = '';
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = '';
      state.currentUser = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.loading = false;
      state.error = '';
      state.currentUser = '';
    },
    toggleTab: (state, action: PayloadAction<Tabs>) => {
      state.activeTab = action.payload;
    },
  },
});

export const login = createAction('LOGIN');
export const me = createAction('ME');
export const logout = createAction('LOGOUT');


export const {
  loginPending,
  loginSuccess,
  loginFailure,
  logOut,
  toggleTab
} = rootReducer.actions;
