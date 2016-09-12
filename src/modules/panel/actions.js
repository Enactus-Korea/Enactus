import { CHANGE_PANEL, PUSH_ROUTE, POP_ROUTE } from './constants'
// 정의해준 것들을 액션에 불어옴

export const changePanel = (index) => {
  return {
    type: CHANGE_PANEL,
    index
  }
}

export const push = (route) => {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export const pop = () => {
  return {
    type: POP_ROUTE
  }
}
