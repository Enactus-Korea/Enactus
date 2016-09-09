import { PUSH_ROUTE, POP_ROUTE, CHANGE_PANEL } from './constants'

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

export const changePanel = (index) => {
  return {
    type: CHANGE_PANEL,
    index
  }
}
