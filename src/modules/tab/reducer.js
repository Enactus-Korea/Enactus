import { CHANGE_TAB, REPLACE_TAB } from './constants'
import { handleActions } from 'redux-actions'
import Icon from 'react-native-vector-icons/Ionicons';

const tabs = [
  { key: 'post', route:'post', iconName: 'ios-create-outline', selectedIconName: 'ios-create' , title: 'Post' },
  { key: 'feed', route:'feed', iconName: 'ios-paper-outline', selectedIconName: 'ios-paper', title: 'Feed' },
  { key: 'profile', route:'profile', iconName: 'ios-contact-outline', selectedIconName: 'ios-contact', title: 'Profile' }
]

const initialState = {
  index: 1,
  route: 'feed',
  tabs
}

export default handleActions({
  [CHANGE_TAB]: (state, action) => {
    return {
      ...state,
      index: action.index
    }
  },
  [REPLACE_TAB]: (state, action) => {
    return {
      ...state,
      index: action.index,
      route: action.route
    }
  }
},initialState)
