import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import  createSagaMiddleware  from 'redux-saga'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'
import rootSaga from './saga'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer, applyMiddleware( sagaMiddleware))
  let persistor = persistStore(store)
     sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
// createStore(persistedReducer, applyMiddleware(sagaMiddleware))