import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import loadingReducer from './loadingReducer';

const reducers = combineReducers({
  messages: messagesReducer,
  users: usersReducer,
  isLoading: loadingReducer
});

export default reducers;
