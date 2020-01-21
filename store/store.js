import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
/*import storage from 'redux-persist/lib/storage' // defaults to localStorage for web*/

/*const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)*/


export default function configureStore(initialState){
	let store;
const isClient = typeof window !== 'undefined';
console.log(isClient);
if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      applyMiddleware(thunk)
    );
     store.__PERSISTOR = persistStore(store);
  } else {
	store=createStore(rootReducer, initialState,applyMiddleware(thunk));
  }
  return  store;
}