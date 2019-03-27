import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import saga from './saga';
import username from './utils/name';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
