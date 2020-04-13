import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';
import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'users', { email, password });
    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const user = {
      name: response.data.name,
      email: response.data.email,
    };

    yield put(signInSuccess(token, user));

    history.push('/encomendas');
  } catch (err) {
    toast.error('Usuário e/ou senha inválidos');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  console.tron.log(token);
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
