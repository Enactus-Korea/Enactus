import { NavigationExperimental } from 'react-native'
import { handleActions } from 'redux-actions'
import { PUSH_ROUTE, POP_ROUTE } from './constants'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'home',
   title: 'Home'
  }]
}

export default handleActions({
  // const { index, routes } = state
  [PUSH_ROUTE]: (state, action) => {
    if (state.routes[state.index].key === (action.route && action.route.key)) return state
        return NavigationStateUtils.push(state, action.route)
    // return{
    //   ...state,
    //   routes: [
    //     ...routes,
    //     action.route
    //   ],
    //   index: index + 1
    // }
  },
  [POP_ROUTE]: (state, action) => {
    if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)
    // return index > 0 ? {
    //   ...state,
    //   routes: routes.slice(0, routes.length - 1),
    //   index: index -1
    // } : state
  },
},initialState)
