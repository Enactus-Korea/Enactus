import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import styles from './styles'

class SearchHead extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchfeeds: '',
      isLoading: false,
      errorMessage: ''
    }
  }
  searchInput(event){
    this.setState({searchfeeds: event.nativeEvent.text})
  }
  searchFeeds(){
    this.fetchData()
  }
  render(){
    const spinner = this.state.isLoading ? (<ActivityIndicator hidden='true' size='small' />) : ( <View />)
    return(
      <View style={styles.container}>
       <TextInput style={styles.searchInput} onChange={this.searchInput.bind(this)} />
       <TouchableOpacity style-{styles.button} onPress={this.searchFeeds.bind(this)}>
        <Text>검색</Text>
       </TouchableOpacity>
       {spinner}
       <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
      </View>
    )
  }
  fetchData(){
    this.setState({ isLoading: true })
  }
}

export default SearchHead
