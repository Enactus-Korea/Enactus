import * as types from './actions'


const initialState = {
  projects:[],
  joined: {},
  feed: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_UNIV_PROJECTS:
      return {...state, projects: action.projects}
    case types.GET_USER_PROJECT:
      return {...state, joined: action.projects}
    case types.FETCH_FEEDS_BY_USERS:
      console.log(action)
      return {...state, feeds: action.feeds}
    default:
      return state
  }
}
