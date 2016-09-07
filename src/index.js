import React from 'react'
import { Provider } from 'react-redux';
import { feed } from './modules'
import createStore from './createStore'

const store = createStore()

// const Enactus = () => {
//   return (
//     <Provider store={store}>
//       <app.App />
//     </Provider>
//   )
// }

function Enactus() {
  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <feed.Feed />
        </Provider>
      )
    }
  }
  return Root;
}

// module.exports = Enactus;
export default Enactus
//<app.App />은 app/App.js를 실행 하는 것
