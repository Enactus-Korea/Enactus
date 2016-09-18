import { CHANGE_PANEL, REPLACE_PANEL } from './constants'
// 정의해준 것들을 액션에 불어옴

export const changePanel = (index) => {
  return {
    type: CHANGE_PANEL,
    index
  }
}

export const replacePanel = (index, route) => {
  return {
    type: REPLACE_PANEL,
    index,
    route
  }
}
