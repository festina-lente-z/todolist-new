import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : 
  compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);
// 创建一个数据公共存储仓库
const store = createStore(
  reducer,
  enhancer
);
sagaMiddleware.run(todoSagas);

export default store;