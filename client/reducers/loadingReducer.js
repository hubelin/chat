import * as types from '../constants/actionTypes';

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_SW_LOAD:
      return (state = true);
    default:
      return state;
  }
};

export default loading;
