import { all } from 'redux-saga/effects';
import { watchAuth } from '@store/sagas/loginSaga';
import { watchGetOrders } from '@store/sagas/ordersSaga';
import { watchGetCategories } from '@store/sagas/categoriesSaga';
import { watchGetProducts } from '@store/sagas/productsSaga';

export default function* rootSaga() {
  yield all([watchAuth(), watchGetOrders(), watchGetCategories(), watchGetProducts()]);
}
