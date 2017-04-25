import React, {Component} from 'react'
import { createStore, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { Reactotron } from 'reactotron-redux'
import reducers from './reducers'
// import Index from './containers'
import DrawerIndex from './containers/example'
import {isGetEmail} from './components/Join/actions'

//


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers, devToolsEnhancer())

// const store = createStore(reducers, compose(applyMiddleware(thunk), devToolsEnhancer()))
// import AppContainer from './containers/AppContainer'
// import AppContainerWithCardStack from './containers/AppContainerWithCardStack'


store.dispatch(isGetEmail())

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<DrawerIndex />
			</Provider>
		)
	}
}
