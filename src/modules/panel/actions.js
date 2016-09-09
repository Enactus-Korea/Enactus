import { CHANGE_PANEL } from './constants'
// 정의해준 것들을 액션에 불어옴

export const changePanel = (index) => {
  return {
    type: CHANGE_PANEL,
    index
  }
}
