import {AsyncStorage, Alert} from 'react-native'
import Reactotron from 'reactotron-react-native'
import app_json from '../../../app.json';
/*==============Types==============*/

export const FETCH_PERMISSION_MEMBER = 'FETCH_PERMISSION_MEMBER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';
export const SUCCESS_USER_LOG_IN = 'SUCCESS_USER_LOG_IN';
export const SUCCESS_USER_LOG_OUT = 'SUCCESS_USER_LOG_OUT';
export const FAILED_USER_LOG_IN = 'FAILED_USER_LOG_IN';
export const IS_FETCHED_USER_DATA = 'IS_FETCHED_USER_DATA';
export const EMAIL_IN_STORAGE = 'EMAIL_IN_STORAGE';
export const NEED_USER_LOGIN = 'NEED_USER_LOGIN';
export const IS_CLEAR_FIRST_PHASE = 'IS_CLEAR_FIRST_PHASE';
export const IS_CLEAR_SECOND_PHASE = 'IS_CLEAR_SECOND_PHASE'
/*============================*/

const REQUEST_URL = app_json.REQUEST_URL || "http://localhost:9000";
const methodPost = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

const methodGet = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

export const isFetchedPermissions = () => (dispatch) => {
  fetch(`${REQUEST_URL}/permission`,{ ...methodGet })
  .then(res => res.json())
  .then(res => dispatch({type: FETCH_PERMISSION_MEMBER , permissions: res.permissions}))
  .catch(err => console.log(err))
}


export const isFirstPhase = (first) => (dispatch) => {
  console.log("isFirstPhase",first)
  dispatch({type: IS_CLEAR_FIRST_PHASE, first})
}

export const isSecondPhase = (second) => (dispatch) => {
  console.log("isSecondPhase",second)
  dispatch({type: IS_CLEAR_SECOND_PHASE, second})
}


export const isRequestedSignUp = (rgst) => (dispatch) => {
  console.log("하하하하")
  const body = new FormData();
  Object.keys(rgst).forEach(key=>{
    if(key === "userImg") {
      body.append(key, {
        uri: rgst.userImg,
        type: "image/jpeg",
        name: rgst.email
      });
    } else {
      body.append(key, rgst[key]);
    }
  });
  fetch(`${REQUEST_URL}/user`, {
    ...methodPost, body,
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      console.log(response);
      dispatch({type:SUCCESS_REGISTER}) //회원가입 완성되면, email 인증하고?, 로그인으로 넘어가기
      // dispatch(loginSuccess(response));
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      // dispatch(loginError(error));
      throw error;
    }
  })
  .catch(error => { console.log('request failed', error); });
}

const fetchUserData = (email) => {
  fetch(`${REQUEST_URL}/user/info`)
  .then(res => res.json())
  .then(res => console.log(res))
}

async function _onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}


export function isGetEmail(){
  return async function(dispatch){
    const email = await AsyncStorage.getItem('user_email');
    if(email){
      dispatch({type: EMAIL_IN_STORAGE, email})
      dispatch(isFetchedUserData(email))
    } else {
      dispatch({type: NEED_USER_LOGIN})
    }
  }
}

export function isUserLogOut(){
  return async function(dispatch){
    await AsyncStorage.removeItem('user_email')
    await AsyncStorage.removeItem('token')
    const email = await AsyncStorage.getItem('user_email');
    dispatch({ type: SUCCESS_USER_LOG_OUT })
    Alert.alert('로그아웃이 완료 되었습니다.')
  }
}


export const isRequestedSignIn = (email, password, navigation) => (dispatch) => {
  // console.log(email, password);
  Reactotron.log("CCCC")
  fetch(`${REQUEST_URL}/user/login`,{
    ...methodPost,
    body: JSON.stringify({email, password}),
  })
  .then(res => res.json())
  .then(res => {
    if(res.success){
      Reactotron.log("DDDD")
      Alert.alert(
        '인액터스 로그인',
        '로그인이 완료 되었습니다.',
        [{text:'확인', onPress: () => {
          dispatch({type:SUCCESS_USER_LOG_IN})
          _onValueChange('token', res.token)
          _onValueChange('user_email', email)
          isGetEmail()
          dispatch(isFetchedUserData(email))
          navigation.navigate('Feed')
        }}]
      )
    } else {
      Reactotron.log("EEEE")
      Alert.alert(
        '로그인 오류',
        '아이디나 비밀번호가 일치하지 않습니다. 가입을 확인해주세요.',
        [{
          text: '확인',
          onPress: () => { dispatch({type:FAILED_USER_LOG_IN})}
        }])
    }
  })
}


export const isFetchedUserData = (email) => (dispatch) => {
  fetch(`${REQUEST_URL}/user/isFetched/${email}`,{ ...methodGet })
  .then(res => res.json())
  .then(res => dispatch({type: IS_FETCHED_USER_DATA, user: res.userData[0]}))
  .catch(err => console.log(err))
}




// Alert.alert('가입완료','가입이 완료되었습니다.\n프로필을 설정해주세요.',[
//   {text: '프로필 설정하기', onPress: () => this.props.navigation.navigate('Profile')},
// ])
