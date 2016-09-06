import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { feed, nav, tab, user } from './modules'
const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    // [feed.NAME]: feed.reducer,
    [nav.NAME]: nav.reducer,
    [tab.NAME]: tab.reducer
    // [user.NAME]: user.reducer
  })

  return createStore(rootReducer, data, middleware)
}
