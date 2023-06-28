import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { createProduct, getProducts } from '@/api';
import {
  createProductsFailure,
  createProductsSuccess,
  getProductsFailure,
  getProductsPending,
  getProductsSuccess
} from '@store/reducers/productsReducer';
import { closeModal } from '@store/reducers/modalReducer';
import { CreateProductData } from '@/interfaces';
import { SagaActions } from '@store/sagas/types';

function* getAllProducts(action: PayloadAction<number>) {
  try {
    yield put(getProductsPending());
    // @ts-ignore
    const response = yield call(getProducts, action.payload);
    yield put(getProductsSuccess(response));
  } catch (error: any) {
    yield put(getProductsFailure(error.message));
  }
}

function* createNewProduct(action: PayloadAction<CreateProductData>) {
  try {
    // @ts-ignore
    const response = yield call(createProduct, action.payload);
    yield put(createProductsSuccess(response));
    yield put(closeModal());
  } catch (error: any) {
    yield put(createProductsFailure(error.message));
  }
}

export function* watchGetProducts() {
  yield takeLatest(SagaActions.GET_PRODUCTS, getAllProducts);
  yield takeLatest(SagaActions.CREATE_PRODUCT, createNewProduct);
}
