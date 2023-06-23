import { all } from 'redux-saga/effects';
import { watchAuth } from '@store/sagas/loginSaga';
import { watchGetOrders } from '@store/sagas/ordersSaga';

export default function* rootSaga() {
  yield all([watchAuth(), watchGetOrders()]);
}
