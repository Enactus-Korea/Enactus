import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'

const initialState = {
  idGen: 0,
  counters: { },
  //post에서 받을 것들
  username: '이유경',
  useruniv: '명지대학교',
  userimg: 'Avatar',
  content: '',
}
//앱 시작 하면 처음에 설정될 값들!
// 카운터 폼 = idGen
// counters = 폼 안에서 카운트 되는 수

export default handleActions({
  [ADD_NEW_COUNTER]: (state, action) => {
    const { idGen } = state
    const newId = idGen + 1
    /**
    새로운 카운터를 만드는 액셕을 정의함
    return은 새로 생성된 곳에 counters값을 0이라고 설정하는 것
    2.[추가하기] constants에서 정의한 액션키를 불러와 reducer에서
    ADD_NEW_COUNTER는 카운터를 추가하는 기능을 한다는 것을
    정의 해준다.
    (handleActions 기능일 일어나는 액션들을 핸들링 하는 곳이 reducer에서 함)
    */
    return {
      // idGen: newId,
      // counters: {
      //   ...state.counters,
      //   [newId]: 0
      // },

    }
  },
  [INCREMENT]: (state, action) => {
    const { payload: { id } } = action
    // action.js에서 정의한것을 설정같이 해줌
    // counter에서 1씩 생성되는 것(액션)을 받는 것을 id라고 설정
    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      counters: {
        ...state.counters,
        [id]: state.counters[id] + 1
      }
    }
  },
  [DECREMENT]: (state, action) => {
    const { payload: { id } } = action

    //this is exatcly similar as previous reducer, except we are decrementing

    return {
      ...state,
      counters: {
        ...state.counters,
        [id]: state.counters[id] - 1
      }
    }
  },
},initialState)
