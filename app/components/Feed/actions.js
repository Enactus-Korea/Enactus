
export const SUCCESS_COMMENT_POSTING = 'SUCCESS_COMMENT_POSTING';

const REQUEST_URL = "http://localhost:9000";

const methodPut = {
  method: 'put',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
}

export const createFeedCmt = (id, comment, user) => (dispatch) => {
  console.log(id, comment, user);
  let {name, univ, userImg} = user;
  let feedComment = { name, univ, userImg, comment }
  fetch(`${REQUEST_URL}/feed/${id}/comment`, {
    ...methodPut,
    body: JSON.stringify({ ...feedComment }),
  })
  .then(res => dispatch({type: SUCCESS_COMMENT_POSTING, ...feedComment}))
  .catch(err => console.log(err))

}
