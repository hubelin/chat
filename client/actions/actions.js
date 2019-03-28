import * as types from '../constants/actionTypes.js';

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

export const fetchSW = () => ({
  type: types.FETCH_SW_LOAD
});

export const setSW = users => ({
  type: types.FETCH_SW_SUCCESS,
  users
});

export const errorSW = error => ({
  type: types.FETCH_SW_FAIL,
  error
});
