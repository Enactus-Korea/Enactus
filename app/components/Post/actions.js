import {AsyncStorage, Alert} from 'react-native'

export const SUCCESS_POSTING = 'SUCCESS_POSTING';
export const FAILED_POSTING = 'FAILED_POSTING'


const REQUEST_URL = "http://localhost:9000";
const methodPost = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

export const onPostPressed = (post) => (dispatch) => {
  console.log("하하하하", post)
  const body = new FormData();
  Object.keys(post).forEach(key=>{
    if(key === "postImg") {
      body.append(key, {
        uri: post.postImg,
        type: "image/jpeg",
        name: post.name
      });
    } else {
      body.append(key, post[key]);
    }
  });
  fetch(`${REQUEST_URL}/feed`, {
    ...methodPost, body,
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      console.log(response);
      dispatch({type:SUCCESS_POSTING})

    } else {
      const error = new Error(response.statusText);
      error.response = response;
      dispatch({type:FAILED_POSTING})
      throw error;
    }
  })
  .catch(error => { console.log('request failed', error); });
}
  //
  // export async function onPostPressed() {
  //   try {
  //     let response = await fetch('http://localhost:9000/feed',{
  //       method: 'POST',
  //       headers:
  //         {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       body: JSON.stringify({
  //         username: this.props.state.userDatas.userName,
  //         useruniv: this.props.state.userDatas.userUniv,
  //         userimg: this.state.userimg,
  //         content: this.state.content
  //       })
  //     })
  //     let res = await response.text()
  //     return this.callbackPosting()
  //   } catch(errors) {
  //     let formErrors = JSON.parse(errors);
  //     console.log(formErrors)
  //   }
  // }
