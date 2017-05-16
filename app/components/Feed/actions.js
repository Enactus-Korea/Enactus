
export const SUCCESS_COMMENT_POSTING = 'SUCCESS_COMMENT_POSTING';
export const CLICK_LIKE_BUTTON = 'CLICK_LIKE_BUTTON'
export const FETCH_FEEDS = 'FETCH_FEEDS'


const REQUEST_URL = "http://localhost:9000";

const methodPut = {
  method: 'put',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
}
const methodGet = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}
export const fetchFeedData = (typeOf) => (dispatch) => {
  fetch(`${REQUEST_URL}/${typeOf}`,{ ...methodGet })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_FEEDS, feed: res.feed})
    })
    .catch(err => console.log(err))
}

export const createFeedCmt = (id, comment, user) => (dispatch) => {
  // console.log(id, comment, user);
  let {name, univ, userImg} = user;
  let feedComment = { name, univ, userImg, comment }
  fetch(`${REQUEST_URL}/feed/${id}/comment`, {
    ...methodPut,
    body: JSON.stringify({ ...feedComment }),
  })
  .then(res => dispatch({type: SUCCESS_COMMENT_POSTING }))
  .catch(err => console.log(err))

}

export const handleLikeUnLike = (feedId, userId) => (dispatch) => {
  fetch(`${REQUEST_URL}/feed/handle/like`, {
    ...methodPut,
    body: JSON.stringify({ feedId, userId }),
  })
  .then(res => {
    dispatch({type: CLICK_LIKE_BUTTON })
  })
  .catch(err => console.log(err))
}
