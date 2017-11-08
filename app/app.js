import React, { Component } from 'react'
import { PushNotificationIOS } from 'react-native'
import { applyMiddleware, compose } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import reducers from './reducers'
// import Index from './containers'
import DrawerIndex from './containers/example'
import {isGetEmail} from './components/Join/actions'

//
// Reactotron.createStore

//
const store = Reactotron.createStore(reducers, compose(applyMiddleware(thunk)))
//
// Reactotron.log(module);
//
// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./reducers', () => {
//     const nextRootReducer = require('./reducers');
//     store.replaceReducer(nextRootReducer);
//   });
// }

//
// function configureStore() {
//   const store = Reactotron.createStore(reducers, compose(applyMiddleware(thunk)))
//
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       const nextRootReducer = require('./reducers');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
//   return store;
// }



store.dispatch(isGetEmail())
// configureStore().dispatch(isGetEmail())
// Reactotron.log(store.getState())

export default class App extends Component {
	componentWillMount(){
		PushNotificationIOS.requestPermissions()
	}
	render() {
		return (
			<Provider store={store}>
				<DrawerIndex />
			</Provider>
		)
	}
}
