import { createStore, applyMiddleware } from 'redux';
import 'regenerator-runtime/runtime';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

// store.dispatch({ type: 'FETCH_SW' });
export default store;
