import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootSaga from '@store/rootSaga';
import { authReducer } from '@store/reducers/authReducer';
import { ordersReducer } from '@store/reducers/ordersReducer';
import { modalReducer } from '@store/reducers/modalReducer';
import { categoriesReducer } from '@store/reducers/categoriesReducer';
import { productsReducer } from '@store/reducers/productsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer.reducer,
  orders: ordersReducer.reducer,
  modals: modalReducer.reducer,
  categories: categoriesReducer.reducer,
  products: productsReducer.reducer
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
