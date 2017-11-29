import React, { Component } from 'react'
import { View } from 'react-native'
import { applyMiddleware, compose } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import reducers from './reducers'
// import Index from './containers'
import DrawerIndex from './containers/example'
import {isGetEmail} from './components/Join/actions'
import PushNotificationSetting from './PushNotificationSetting'

const store = Reactotron.createStore(reducers, compose(applyMiddleware(thunk)))



store.dispatch(isGetEmail())
// configureStore().dispatch(isGetEmail())
// Reactotron.log(store.getState())

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>

				<PushNotificationSetting>
					<DrawerIndex />
				</PushNotificationSetting>

			</Provider>
		)
	}
}
