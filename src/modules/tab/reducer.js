import { CHANGE_TAB } from './constants'
import { handleActions } from 'redux-actions'
import Icon from 'react-native-vector-icons/Ionicons';

const tabs = [
  { key: 'post', iconName: 'ios-create-outline', selectedIconName: 'ios-create' , title: 'Post' },
  { key: 'feed', iconName: 'ios-paper-outline', selectedIconName: 'ios-paper', title: 'Feed' },
  { key: 'profile', iconName: 'ios-contact-outline', selectedIconName: 'ios-contact', title: 'Profile' }
]

const initialState = {
  index: 0,
  tabs
}

export default handleActions({
  [CHANGE_TAB]: (state, action) => {
    return {
      ...state,
      index: action.index
    }
  }
},initialState)
