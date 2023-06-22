import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSuccessResponse, RootState } from '@/interfaces';

export const initialState: RootState = {
  currentUser: '',
  error: '',
  loading: false,
};

export const rootReducer = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.loading = true;
      state.error = '';
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessResponse>) => {
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
} = rootReducer.actions;
