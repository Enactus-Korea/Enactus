import * as types from './actions'

// console.log(this.props.user.selfIntro)

const initialState = {
  feed : []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FEEDS:
      return { feed : action.feed}
    default:
      return state
  }
}
