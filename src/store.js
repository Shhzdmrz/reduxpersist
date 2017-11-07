import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { createLogger } from 'redux-logger';

import rootReducers from './rootReducer';// where reducers is a object of reducers
const config = { 
    key: 'root', 
    storage, 
    //debug: true //to get useful logging
};
const middleware = [];

if(__DEV__){ middleware.push(createLogger()); }
const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    //console.log(store.getState());
});
const configureStore = () => {
    return { persistor, store };
}

export default configureStore;