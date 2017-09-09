/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import './ReactotronConfig'
import { AppRegistry } from 'react-native';
import EnactusApp from './app/app'

// "REQUEST_URL": "http://ec2-13-124-127-39.ap-northeast-2.compute.amazonaws.com"
// "REQUEST_URL": "http://localhost:9000"

AppRegistry.registerComponent('EnactusApp', () => EnactusApp);
