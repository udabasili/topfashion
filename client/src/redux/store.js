import rootReducer from "./rootReducer";
import {createStore, compose, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";

const middleware = [thunk]

const composeEnhancers = process.env.NODE_ENV === 'production' ?
  compose :
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
))

export const persistor = persistStore(store)
export default {store, persistor};
