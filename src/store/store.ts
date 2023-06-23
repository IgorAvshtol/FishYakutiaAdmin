import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootSaga from '@store/rootSaga';
import { rootReducer } from '@store/reducers/rootReducer';
import { ordersReducer } from '@store/reducers/ordersReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    root: rootReducer.reducer,
    orders: ordersReducer.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
