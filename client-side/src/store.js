import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const intialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    intialState,
    compose( // use multiple enhancers
        applyMiddleware(...middleware)
    )
);

export default store;