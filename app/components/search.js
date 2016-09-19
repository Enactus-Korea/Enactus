import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Search extends Component{
  constructor(props){
    super(props)
    this.props.actions.changeNav('search')
  }
  componentDidMount(){
    // this.props.close()
  }
  close() {
    this.props.state.navigator.pop();
  }

  render(){
    return(
      <View>
        <Text>search</Text>
        <TouchableOpacity onPress ={() => this.close()}>
					<Icon color="#000" name="close" size={24} />
				</TouchableOpacity>
      </View>
    )
  }
}

export default Search
