import {createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);