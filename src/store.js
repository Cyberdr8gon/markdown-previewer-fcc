import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import {markdownReducer} from './reducers/index.js';


const reducers = combineReducers({
  markdown: markdownReducer,
});

const middleware = applyMiddleware(createLogger());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(middleware));

