import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllUsersOrders } from '@/api';
import { getOrdersFailure, getOrdersPending, getOrdersSuccess } from '@store/reducers/ordersReducer';

function* getAllOrders() {
  try {
    yield put(getOrdersPending());
    // @ts-ignore
    const response = yield call(getAllUsersOrders);
    yield put(getOrdersSuccess(response));
  } catch (error: any) {
    yield put(getOrdersFailure(error.message));
  }
}

export function* watchGetOrders() {
  yield takeLatest('GET_ORDERS', getAllOrders);
}
