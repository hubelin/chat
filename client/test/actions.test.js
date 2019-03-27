import { addMessage, addUser } from '../actions/actions';
import * as types from '../constants/actionTypes';

describe('adding a message', () => {
  it('should create an action to add message with id 0', () => {
    const message = 'test';
    const action = {
      type: types.ADD_MESSAGE,
      message,

      id: 0
    };
    expect(addMessage(message)).toEqual(action);
  });
});

describe('adding second message', () => {
  it('should create action to add message with id 1', () => {
    const message = 'second';
    const action = {
      type: types.ADD_MESSAGE,
      message,
      id: 1
    };
    expect(addMessage(message)).toEqual(action);
  });
});
