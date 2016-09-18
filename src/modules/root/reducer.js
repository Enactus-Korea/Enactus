import { NavigationExperimental } from 'react-native'
import { handleActions } from 'redux-actions'
import { PUSH_ROUTE, POP_ROUTE, REPLACE_ROUTE } from './constants'

const {
  // CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const panels = [
  { key: 'news', route: 'news', name:'md-paper', title: '뉴스피드' },
  { key: 'intro', route: 'intro', name:"md-share", title: '인액터스 소개' },
  { key: 'network',route: 'network', name:'md-git-network',  title: '네트워크' },
]

const initialState = {
	key: 'root',
	index: 0,
	panels
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
  [REPLACE_ROUTE]: (state, action) => {
    return {
      ...state,
      index: action.index,
      route: action.route
    }
  }
},initialState)
