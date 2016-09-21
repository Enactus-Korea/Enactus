
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'

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
    this.props.state.navigator.replace({id:'home'});
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
      <View style={styles.navContainer}>
				<TouchableOpacity
					style={styles.LeftComp}
					onPress ={() => this.menu()}>
					<Icon color='white' name={this.props.state.navProps.icon} size={24} />
				</TouchableOpacity>
        <Text style={styles.TitleComp}>{this.props.state.navProps.name}</Text>
				{this.props.state.navProps.name === "인액터스" ?
				<View style={styles.RightComp}>
					<TouchableOpacity onPress ={() => this.notification()}>
						<Icon name="notifications" color='white' size={24} style={{paddingLeft:10}}/>
					</TouchableOpacity>
					<TouchableOpacity onPress ={() => this.search()}>
						<Icon name="search" color='white' size={24} style={{paddingLeft:10}} />
					</TouchableOpacity>
				</View> : <View style={styles.RightComp} />}
      </View>
    );
  }
}
