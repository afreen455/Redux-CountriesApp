// eslint-disable-next-line
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import Thunk from 'redux-thunk';

export const middlewares = [Thunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
 
export const Store = createStoreWithMiddleware(rootReducer);


export default Store;