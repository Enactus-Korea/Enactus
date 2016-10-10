import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EachComp from './control_widgets/each_Nav'
import Profile from './control_widgets/panelHead'
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var eachNav = [
{icon: "ios-home-outline", name:"Home", route:"home"},
{icon: "ios-search", name:"Intro", route:"intro"},
{icon: "ios-chatboxes-outline", name:"Network", route:"network"},
// {icon: "ios-navigate-outline", name:"Trips", route:"trips"},
// {icon: "ios-heart-outline", name:"Wish List", route:"wish"},
{icon: "ios-person-outline", name:"Login", route:"login"},
// {icon: "ios-settings-outline", name:"Settings", route:"settings"},
]

export default class Control extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      dataSource: ds.cloneWithRows(eachNav),
    }
  }

  render() {
    return(
      <View style={{backgroundColor:'rgba(255,255,255,0.93)', flex:1,}}>
        <Profile {...this.props} />
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <EachComp icon = {rowData.icon} route = {rowData.route} {...this.props}>{rowData.name}</EachComp>}
        />
    	</View>
    )
  }
}

// <Profile {...this.props} />
// <ListView
// dataSource={this.state.dataSource}
// renderRow={(rowData) => <EachComp icon = {rowData.icon} route = {rowData.route} {...this.props}>{rowData.name}</EachComp>}
// />
