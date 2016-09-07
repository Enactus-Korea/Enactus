import { NavigationExperimental } from 'react-native'
import { handleActions } from 'redux-actions'
import { PUSH_ROUTE, POP_ROUTE } from './constants'

const {
  // CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
	key: 'root',
	index: 0,
	routes: [{
			key: 'Tabs',
			index: 0
		}],
};

export default handleActions({
  [PUSH_ROUTE]: (state, action) => {
    if (state.routes[state.index].key === (action.route && action.route.key)) return state
        return NavigationStateUtils.push(state, action.route)
  },
  [POP_ROUTE]: (state, action) => {
    if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)
  },
},initialState)
