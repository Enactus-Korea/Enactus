import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import * as actions from '../Join/actions'
import FeedList from './FeedList'
// import styles from './styles'


export default class FeedContainer extends PureComponent  {
  constructor(props){
    super(props)
  }
  render(){
    let { navigation } = this.props;
    return (
      <FeedList navigation={navigation} typeOf={'feed'} detailRoute={'Detail'}/>
    )
  }
}



// export default connect(null, actions)(FeedContainer)
