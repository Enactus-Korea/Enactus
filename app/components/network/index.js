import React, { Component } from 'react';
import { View, Text, ListView, Image, ScrollView,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PeopleCell from './peopleCell'
import styles from './styles'

const REQUEST_URL = "http://localhost:9000/user";

class Network extends Component{
  constructor(props){
    super(props);
    this.state = {
			dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
			toggle: false
		}
  }

  componentDidMount(){
    this.props.actions.changeNav('network');
    this.props.close();
    this.fetchData();
  }

  async fetchData(){
    let response = await fetch(REQUEST_URL);
    let responseJson = await response.json();
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseJson.users),
      loaded: true
    })
  }
  renderMember(user){
    return(
      <View>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <View style={{flex: 0, justifyContent: 'flex-end'}}>
                <Image source={require('../../assets/user.png')} style={styles.userImage}/>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.userName} numberOfLines={1} >{user.userName}</Text>
                <Text style={styles.userUniv} numberOfLines={1} >{user.userUniv}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.cellBorder} />
      </View>
    )
  }
  render() {
    if(!this.state.loaded) {
      return (
        <View>
          <Text style={{marginTop:100}}> 멤버가 없네요</Text>
        </View>
      )
    }
    return(
  			<ListView
  				dataSource={this.state.dataSource}
  				renderRow={this.renderMember.bind(this)}
        />
    )
  }
}

export default Network
