import {Alert} from 'react-native'


export const MODIFIED_SELF_INTRO = 'MODIFIED_SELF_INTRO';


const REQUEST_URL = "http://localhost:9000";
const methodPut = {
  method: 'put',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
}



export const isModifiedIntro = (email, selfIntro) => (dispatch) => {
  console.log(email, selfIntro)
  fetch(`${REQUEST_URL}/user/setting/intro/${email}`, {
    ...methodPut,
    body: JSON.stringify({ selfIntro }),
  })
  .then(res => dispatch({type: MODIFIED_SELF_INTRO, selfIntro}))
  .catch(err => console.log(err))
}
