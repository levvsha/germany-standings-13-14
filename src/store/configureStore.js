import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import immutableStateMiddleware from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const middlewares = [thunkMiddleware];

if (IS_PRODUCTION) { //eslint-disable-line no-undef
  middlewares.push(immutableStateMiddleware());
}

export default function configureStore(history, initialState) {
  middlewares.push(routerMiddleware(history));

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
