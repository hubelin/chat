import messagesReducer from '../reducers/messagesReducer';
import * as types from '../constants/actionTypes';

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messagesReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_MESSAGE and store all message', () => {
    // empty
    expect(
      messagesReducer([], {
        type: types.ADD_MESSAGE,
        message: 'test',
        author: 'Me'
      })
    ).toEqual([{ message: 'test', author: 'Me' }]);
    // contains previous message
    expect(
      messagesReducer([{ message: 'test', author: 'Me' }], {
        type: types.ADD_MESSAGE,
        message: 'test2',
        author: 'Me'
      })
    ).toEqual([
      { message: 'test', author: 'Me' },
      { message: 'test2', author: 'Me' }
    ]);
  });
});
