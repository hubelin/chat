import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  messages: messagesReducer,
  users: usersReducer
});

export default reducers;
