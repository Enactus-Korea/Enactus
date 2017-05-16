import * as types from './actions'

// console.log(this.props.user.selfIntro)

const initialState = {
  likeNum : ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case types.FETCH_FEED_LIKES:
    //   console.log("FETCH_FEED_LIKES - reducers", action.likeNum);
    //   return { likeNum : action.likeNum}
    default:
      return state
  }
}
