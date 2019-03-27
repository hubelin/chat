import * as types from '../constants/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;