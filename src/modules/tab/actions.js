import { CHANGE_TAB } from './constants'
// 정의해준 것들을 액션에 불어옴

export const changeTab = (index) => {
  return {
    type: CHANGE_TAB,
    index
  }
}
