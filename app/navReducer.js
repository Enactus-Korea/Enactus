

// const AppNavigator = StackNavigator(AppRouteConfigs);

// export const navReducer = (state, action) => {
//   const newState = AppNavigator.router.getStateForAction(action, state);
//   return newState || state;
// };

//
// function navigationState(state = initialNavState, action) {
// 	switch (action.type) {
// 	case types.NAV_PUSH:
// 		if (state.routes[state.index].key === (action.state && action.state.key)) return state
// 		return NVStateUtils.push(state, action.state)
//
// 	case types.NAV_POP:
// 		if (state.index === 0 || state.routes.length === 1) return state
// 		return NVStateUtils.pop(state)
//
// 	case types.NAV_JUMP_TO_KEY:
// 		return NVStateUtils.jumpTo(state, action.key)
//
// 	case types.NAV_JUMP_TO_INDEX:
// 		return NVStateUtils.jumpToIndex(state, action.index)
//
// 	case types.NAV_RESET:
// 		return {
// 			...state,
// 			index: action.index,
// 			routes: action.routes
// 		}
//
// 	default:
// 		return state
// 	}
// }
