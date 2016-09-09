import { CHANGE_PANEL } from './constants'
import { handleActions } from 'redux-actions'
import Icon from 'react-native-vector-icons/Ionicons';

const panels = [
  { key: 'news', name:'md-paper', title: '뉴스피드' },
  { key: 'intro', name:"md-share", title: '인액터스 소개' },
  { key: 'network', name:'md-git-network',  title: '네트워크' },
  // { key: 'message', name:'ios-chatbubbles', title: '메세지함' },
  { key: 'unknown', name:'md-volume-down', title: '대나무 숲' },
  { key: 'archive', name:'md-cloud-download',  title: '아카이브' },
  // { key: 'contact', name:'ios-mail-outline',  title: '문의' },
  { key: 'config', name:'ios-construct', title: '설정' },
  { key: 'login', name:'ios-unlock', title: '로그인/회원가입' }
]

const initialState = {
  index: 0,
  panels
}

export default handleActions({
  [CHANGE_PANEL]: (state, action) => {
    return {
      ...state,
      index: action.index
    }
  }
},initialState)
