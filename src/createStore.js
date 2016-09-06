import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { app, nav } from './modules'
const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    [app.NAME]: app.reducer,
    [nav.NAME]: nav.reducer
    // [tab.NAME]: tab.reducer
  })

  return createStore(rootReducer, data, middleware)
}