import { PUSH_ROUTE, POP_ROUTE } from './constants'

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
