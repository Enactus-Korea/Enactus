import * as types from './actions'


const initialState = {
  projects:[],
  joined: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_UNIV_PROJECTS:
      return {...state, projects: action.projects}
    case types.GET_USER_PROJECT:
      console.log(action)
      return {...state, joined: action.projects}
    default:
      return state
  }
}
