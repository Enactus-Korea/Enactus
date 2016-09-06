import { NavigationExperimental } from 'react-native'
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
  [PUSH_ROUTE]: (state, action) => {
    if (state.routes[state.index].key === (action.route && action.route.key)) return state
        return NavigationStateUtils.push(state, action.route)
  },
  [POP_ROUTE]: (state, action) => {
    if (state.routes[state.index].key === (action.route && action.route.key)) return state
        return NavigationStateUtils.push(state, action.route)
  },
},initialState)

// export default navigationState (state = initialState, action) {
//   switch (action.type) {
//
//     case PUSH_ROUTE:
//       if (state.routes[state.index].key === (action.route && action.route.key)) return state
//     return NavigationStateUtils.push(state, action.route)
//
//     case POP_ROUTE:
//       if (state.index === 0 || state.routes.length === 1) return state
//       return NavigationStateUtils.pop(state)
//
//    default:
//      return state
//
//   }
// }

// export default navigationState
