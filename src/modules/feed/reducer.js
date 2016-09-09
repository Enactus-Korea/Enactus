import { NavigationExperimental } from 'react-native'
import { handleActions } from 'redux-actions'
import { PUSH_ROUTE, POP_ROUTE, CHANGE_PANEL } from './constants'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const panels = [
  // { key: 'news', name:'md-paper', title: '뉴스피드' },
  { key: 'intro', name:"md-share", title: '인액터스 소개' },
  { key: 'network', name:'md-git-network',  title: '네트워크' },
  // { key: 'message', name:'ios-chatbubbles', title: '메세지함' },
  // { key: 'unknown', name:'md-volume-down', title: '대나무 숲' },
  // { key: 'archive', name:'md-cloud-download',  title: '아카이브' },
  // // { key: 'contact', name:'ios-mail-outline',  title: '문의' },
  // { key: 'config', name:'ios-construct', title: '설정' },
  // { key: 'login', name:'ios-unlock', title: '로그인/회원가입' }
]

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'home', title: '뉴스피드'
  }],
  panels
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
  [CHANGE_PANEL]: (state, action) => {
    return {
      ...state,
      index: action.index
    }
  }
},initialState)
