
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
constructor(props){
	super(props)
	console.log("props :")
	console.log(this.props)
}

menu(){
  if(this.props.state.navProps.type == "menu"){
    this.props.onPress();

  } else if(this.props.state.navProps.type == "pop"){
    this.props.state.navigator.push({id:'inbox'});
  }
}

search() {
	this.props.state.navigator.push({id:'search'});
}

notification() {
	this.props.state.navigator.push({id:'notification'});
}

  render() {
    return (
      <View style= {{padding:20, backgroundColor:this.props.state.navStyle.backgroundColor, flexDirection:'row'}}>
				<TouchableOpacity onPress ={() => this.menu()}>
					<Icon color={this.props.state.navStyle.color} name={this.props.state.navProps.icon} size={24} />
				</TouchableOpacity>
        <Text style={{alignSelf:'center', marginLeft:10, fontWeight:'600', color:'#fff', fontSize:16}}>{this.props.state.navProps.name}</Text>
				{this.props.state.navProps.name === "인액터스" ?
					<View style={{flexDirection: 'row'}}>
						<TouchableOpacity onPress ={() => this.notification()}>
							<Icon name="notifications" size={24}/>
						</TouchableOpacity>
						<TouchableOpacity onPress ={() => this.search()}>
							<Icon name="search" size={24}/>
						</TouchableOpacity>
					</View> : <View />}
      </View>
    );
  }
}
