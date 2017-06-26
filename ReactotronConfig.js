import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

Reactotron
  .configure({
    host: '192.168.0.57',
    port: 9090,
    name: 'Enactus App'
  }) // controls connection & communication settings
  .useReactNative()  // add all built-in react native plugins
  .use(reactotronRedux())
  .connect() // let's connect!

  //
  // if (__DEV__) {
  //   Reactotron.connect()
  //   Reactotron.clear()
  // }
