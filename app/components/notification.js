import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Notification extends Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
    this.props.actions.changeNav('notification')
    // this.props.close()
  }
  close() {
    this.props.state.navigator.pop();
  }

  render(){
    return(
      <View>
        <Text>notification</Text>
        <TouchableOpacity onPress ={() => this.close()}>
					<Icon color="#000" name="close" size={24} />
				</TouchableOpacity>
      </View>
    )
  }
}

export default Notification
