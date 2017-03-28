import React, {Component} from 'react'
// import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import * as actions from '../Join/actions'
import FeedList from './FeedList'
import styles from './styles'

// class FeedContainer extends Component {
//   render(){
//     const {navigation} = this.props;
//     return(
//       <View>
//         <FeedList navigation={navigation}/>
//       </View>
//     )
//   }
// }

const FeedContainer = ({navigation}) => (
  <View>
    <FeedList navigation={navigation}/>
  </View>
)


// export default connect(null, actions)(FeedContainer)
export default FeedContainer
