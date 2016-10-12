import React, { Component } from 'react';
import { View, Text, ListView, Image, ScrollView,TextInput,TouchableOpacity } from 'react-native';
import MemberRow from './memberRow'
import Search from './search'
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
			toggle: false,
      searchText:"",
		}
  }

  componentDidMount(){
    this.props.actions.changeNav('network');
    this.props.close();
    this.fetchData();
  }
  setSearchText(event){
    const searchText = event.nativeEvent.text;
    this.setState({searchText});
    userLength= this.state.users.length
    aUser = this.state.movies

    const filteredUsers = this.state.users.filter(checkName)
    function checkName() {
          for(i=0;i<userLength;i++){
            if(aUser[i].title === searchText){
              console.log("found:  " + aUser[i].userName);
              return aUser[i];
            }
          }
      }
    this.setState({
        searchText,
        dataSource: this.state.dataSource.cloneWithRows(filteredMovies),
    })
  }
  async fetchData(){
    let response = await fetch(REQUEST_URL);
    let responseJson = await response.json();
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseJson.users),
      loaded: true,
      users: responseJson.users,
    })
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
  				renderRow={(user) => <MemberRow {...user} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={(users) =>
            <Search
              {...users}
              value={this.state.searchText}
              onChange={this.setSearchText.bind(this)}
            />}
        />
    )
  }
}


export default Network
