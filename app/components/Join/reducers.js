import * as types from './actions'
import * as settings from '../Profile/actions'

// console.log(this.props.user.selfIntro)

const initialState = {
  permissions:[],
  token: '',
  user:{},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PERMISSION_MEMBER:
      console.log(action)
      return { permissions: action.permissions }
    case types.EMAIL_IN_STORAGE:
    case types.SUCCESS_USER_LOG_IN:
      return {...state, token: true}
    case types.NEED_USER_LOGIN:
    case types.SUCCESS_USER_LOG_OUT:
      return {...state, token: false, user: false}
    case types.IS_FETCHED_USER_DATA:
      return {...state, user: action.user}
    case settings.MODIFIED_SELF_INTRO:
      return { ...state, user: {
        ...state.user,
        selfIntro: action.selfIntro
      }}
    case types.IS_CLEAR_FIRST_PHASE:
    let { email, password, userType } = action.first
      return { ...state, rgst:{ email, password, userType }}
    case types.IS_CLEAR_SECOND_PHASE:
    let { name, enactusType, univ, joined, intro, userImg} = action.second;
      return { ...state, rgst:{ ...state.rgst, name, joined, univ, enactusType, selfIntro: intro, userImg}}
    default:
      return state
  }
}
