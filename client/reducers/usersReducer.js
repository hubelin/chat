import * as types from '../constants/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_SW_SUCCESS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};

export default users;
