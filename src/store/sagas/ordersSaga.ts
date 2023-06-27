import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllUsersOrders } from '@/api';
import { getOrdersFailure, getOrdersPending, getOrdersSuccess } from '@store/reducers/ordersReducer';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaActions } from '@store/sagas/types';

function* getAllOrders(action: PayloadAction<number>) {
  try {
    yield put(getOrdersPending());
    // @ts-ignore
    const response = yield call(getAllUsersOrders, action.payload);
    yield put(getOrdersSuccess(response));
  } catch (error: any) {
    yield put(getOrdersFailure(error.message));
  }
}

export function* watchGetOrders() {
  yield takeLatest(SagaActions.GET_ORDERS, getAllOrders);
}
