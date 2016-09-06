import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'
// 정의해준 것들을 액션에 불어옴

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: {
      id
    }
  }
}

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: {
      id
    }
  }
}
/** 3. actions.js는 reducer에서 정한것과 맞게 type을 적어준다. [추가하기]
newCounter라는 이름을 가진 액션은 ADD_NEW_COUNTER이 가진 기능을 실행함
*/
export const newCounter = () => {
  return {
    type: ADD_NEW_COUNTER
  }
}
