
export const SUCCESS_COMMENT_POSTING = 'SUCCESS_COMMENT_POSTING';
export const CLICK_LIKE_BUTTON = 'CLICK_LIKE_BUTTON'
export const FETCH_FEED_LIKES = 'FETCH_FEED_LIKES'


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
    dispatch(fetchFeedLikes(feedId))
  })
  .catch(err => console.log(err))
}

export const fetchFeedLikes = (feed_id) => (dispatch) => {
  fetch(`${REQUEST_URL}/feed/handle/like/${feed_id}`,{ ...methodGet })
  .then(res => res.json())
  .then(res => {
    dispatch({type: FETCH_FEED_LIKES, likeNum: res})
  })
  .catch(err => console.log(err))
}
