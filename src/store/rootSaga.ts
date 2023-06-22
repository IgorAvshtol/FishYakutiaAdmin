import { all } from 'redux-saga/effects';
import { watchAuth } from '@store/sagas/loginSaga';

export default function* rootSaga() {
  yield all([watchAuth()]);
}
