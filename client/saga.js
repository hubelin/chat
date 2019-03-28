import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from './constants/actionTypes';

// watcher saga
function* rootSaga() {
  // listens for actions Hello and it will pause itself and then wo
  yield takeEvery(types.FETCH_SW_LOAD, handleSWLoad);
  yield call(byeSaga);
}

//worker sagas
function* handleSWLoad() {
  const users = yield call(fetchSW);
  console.log('users', users);
}

async function fetchSW() {
  const data = await fetch('https://swapi.co/api/people/');
  const res = data.json();
  return res;
}
function* byeSaga() {
  console.log('bye');
}

//watcher saga -> listens for actions -> worker saga
export default rootSaga;
