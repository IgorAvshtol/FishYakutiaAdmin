import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser, logoutUser, me } from '@/api';
import { loginFailure, loginPending, loginSuccess, logOut } from '@store/reducers/rootReducer';

function* login(action) {
  try {
    yield put(loginPending());
    if (action.payload) {
      const response = yield call(loginUser, action.payload);
      yield put(loginSuccess(response));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* getMe() {
  try {
    yield put(loginPending());
    const response = yield call(me);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logout() {
  try {
    const response = yield call(logoutUser);
    yield put(logOut(response));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchAuth() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('ME', getMe);
  yield takeLatest('LOGOUT', logout);
}
