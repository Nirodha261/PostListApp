import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['PostReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer,
  applyMiddleware(thunk));
export const persistor = persistStore(store);