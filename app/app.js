import React, {Component} from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
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

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// const store = createStoreWithMiddleware(reducers, devToolsEnhancer())

const store = Reactotron.createStore(reducers, compose(applyMiddleware(thunk)))
// import AppContainer from './containers/AppContainer'
// import AppContainerWithCardStack from './containers/AppContainerWithCardStack'


store.dispatch(isGetEmail())
// Reactotron.log(store.getState())

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<DrawerIndex />
			</Provider>
		)
	}
}
