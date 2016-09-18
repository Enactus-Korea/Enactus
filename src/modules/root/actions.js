import { PUSH_ROUTE, POP_ROUTE, REPLACE_PANEL } from './constants'

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

export const replacePanel = (index, route) => {
  return {
    type: REPLACE_PANEL,
    index,
    route
  }
}
