import {AsyncStorage, Alert} from 'react-native'

/*==============Types==============*/

export const FETCH_PERMISSION_MEMBER = 'FETCH_PERMISSION_MEMBER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';
export const SUCCESS_USER_LOG_IN = 'SUCCESS_USER_LOG_IN';
export const SUCCESS_USER_LOG_OUT = 'SUCCESS_USER_LOG_OUT';
export const FAILED_USER_LOG_IN = 'FAILED_USER_LOG_IN';
export const IS_FETCHED_USER_DATA = 'IS_FETCHED_USER_DATA';
export const EMAIL_IN_STORAGE = 'EMAIL_IN_STORAGE';
export const NEED_USER_LOGIN = 'NEED_USER_LOGIN'
/*============================*/

const REQUEST_URL = "http://localhost:9000";
const methodPost = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

export const isFetchedPermissions = () => (dispatch) =>{
  fetch(`${REQUEST_URL}/permission`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => dispatch({type: FETCH_PERMISSION_MEMBER , permissions: res.permissions}))
  .catch(err => console.log(err))
}

export const isRequestedSignUp = (email, password, name, univ) => (dispatch) => {
  fetch(`${REQUEST_URL}/user`, {
    ...methodPost,
    body: JSON.stringify({ email, password, univ, name }),
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

// export const isGetExistEmail = () => {
//   isGetEmail()
// }

// export async function isGetEmail(){
//   const email = await AsyncStorage.getItem('user_email');
//   dispatch({type: EMAIL_IN_STORAGE, email})
//   dispatch(isFetchedUserData(email))
// }

export function isGetEmail(){
  console.log("isgeeeettt")
  return async function(dispatch){
    const email = await AsyncStorage.getItem('user_email');
    if(email){
      dispatch({type: EMAIL_IN_STORAGE, email})
      dispatch(isFetchedUserData(email))
    } else {
      dispatch({type: NEED_USER_LOGIN})
    }

    console.log("세션에 등록된 메일을 찾는 중",email);

  }
}

export function isUserLogOut(){
  return async function(dispatch){
    await AsyncStorage.removeItem('user_email')
    await AsyncStorage.removeItem('token')
    const email = await AsyncStorage.getItem('user_email');
    console.log('로그아웃으로 제대로 지워졌나 확인중',email);
    dispatch({ type: SUCCESS_USER_LOG_OUT })
    Alert.alert('로그아웃이 완료 되었습니다.')
  }
}


export const isRequestedSignIn = (email, password) => (dispatch) => {
  // console.log(email, password);
  fetch(`${REQUEST_URL}/user/login`,{
    ...methodPost,
    body: JSON.stringify({email, password}),
  })
  .then(res => res.json())
  .then(res => {
    if(res.success){
      dispatch({type:SUCCESS_USER_LOG_IN})
      console.log(email);
      // await AsyncStorage.setItem('token', res.token)
      _onValueChange('token', res.token)
      _onValueChange('user_email', email)
      isGetEmail()

      dispatch(isFetchedUserData(email))
    }
  })
}


export const isFetchedUserData = (email) => (dispatch) => {
  fetch(`${REQUEST_URL}/user/isFetched/${email}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => dispatch({type: IS_FETCHED_USER_DATA, user: res.userData[0]}))
  .catch(err => console.log(err))
}

// Alert.alert('가입완료','가입이 완료되었습니다.\n프로필을 설정해주세요.',[
//   {text: '프로필 설정하기', onPress: () => this.props.navigation.navigate('Profile')},
// ])