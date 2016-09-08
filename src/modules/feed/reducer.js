import { NavigationExperimental } from 'react-native'
import { handleActions } from 'redux-actions'
import { PUSH_ROUTE, POP_ROUTE, GET_NEW_FEED } from './constants'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'feed',
  routes: [{
   key: 'home', title: '뉴스피드'
  }]

}

export default handleActions({
  [PUSH_ROUTE]: (state, action) => {
    if (state.routes[state.index].key === (action.route && action.route.key)) return state
        return NavigationStateUtils.push(state, action.route)
  },
  [POP_ROUTE]: (state, action) => {
    if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)
  },
  // [GET_NEW_FEED]: (state, action) => {
  //   return(
  //
  //   )
  // }
},initialState)
