import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import  createSagaMiddleware  from 'redux-saga'

 import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  let persistor = persistStore(store)
     sagaMiddleware.run(rootSaga)
  return { store, persistor }
}