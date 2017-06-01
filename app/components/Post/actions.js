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

export const isPostToBamboo = (post, nav) => (dispatch) => {
  let bamboo = {
    name: '익명',
    univ: '',
    content: post.content,
    userImg: '',
    postImg: post.postImg,
    typeOf: post.typeOf
  }
  const body = new FormData();
  if(bamboo.postImg){
    console.log('bbbbbb');
    Object.keys(bamboo).forEach(key=>{
      if(key === "postImg") {
        body.append(key, {
          uri: bamboo.postImg,
          type: "image/jpeg",
          name: bamboo.name
        });
      } else {
        body.append(key, bamboo[key]);
      }
    });
  } else {
    Object.keys(bamboo).forEach(key=>{
      body.append(key, bamboo[key]);
    })
  }
  fetch(`${REQUEST_URL}/feed`, {
    ...methodPost, body,
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      Alert.alert('Enactus', '익명으로 작성이 완료 되었습니다', [{'text': '확인', onPress: () => {
        dispatch({type:SUCCESS_POSTING})
        nav.navigate('Feed')
      }}])
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      Alert.alert('Enactus', '피드 작성에 실패하였습니다.', [{'text': '확인', onPress: () => {
        dispatch({type:FAILED_POSTING})
        nav.navigate('Feed')
      }}])
      throw error;
    }
  })
  .catch(error => { console.log('request failed', error); });
}


export const onPostPressed = (post, nav) => (dispatch) => {
  console.log("하하하하", post)
  const body = new FormData();
  if(post.postImg){
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
  } else {
    Object.keys(post).forEach(key=>{
      body.append(key, post[key]);
    })
  }
  console.log(body)
  fetch(`${REQUEST_URL}/feed`, {
    ...methodPost, body,
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      Alert.alert('Enactus', '작성되었습니다', [{'text': '확인', onPress: () => {
        dispatch({type:SUCCESS_POSTING})
        nav.navigate('Feed')
      }}])
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      Alert.alert('Enactus', '피드 작성에 실패하였습니다.', [{'text': '확인', onPress: () => {
        dispatch({type:FAILED_POSTING})
        nav.navigate('Feed')
      }}])
      throw error;
    }
  })
  .catch(error => { console.log('request failed', error); });
}
