import React, { Component } from 'react';
import {View,Text,ListView, TouchableHighlight,TextInput,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles'
import FeedCell from '../feed/FeedComp'

class Search extends Component{
  constructor(props){
    super(props)
    // this.props.actions.changeNav('search')
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
      text: null,
      loaded: false,
    }
  }
  onTyping(text){
    this.setState({
      text: text.text || ''
    })
  }
  componentDidMount(){
    // this.props.close()
    // this.searchFeeds('');
  }
  render(){
    return(
      <View style={styles.topBlock}>
          <View style={styles.searchBar}>

            <TextInput
              style={styles.searchBarInput}
              autoFocus={true}
              placeholder="Search"
              placeholderTextColor="gray"
              onChangeText={text => this.onTyping({ text })}
              value={this.state.text}
            />
            {(this.state.text && this.state.text.length > 0) ?
              <TouchableHighlight
              onPress={() => this.setState({
                text: '',
                dataSource: this.state.dataSource.cloneWithRows([]),
              })}>
              <Text style={styles.cancelButtonText}>취소</Text></TouchableHighlight> : null}
          </View>
        </View>
    )
  }
}
// <TouchableHighlight
//   style={styles.cancelButton}
//   underlayColor="black"
//   onPress={Actions.pop}
// >
//   <Text style={styles.cancelButtonText}>
//     취소
//   </Text>
// </TouchableHighlight>


// <Icon
//   style={styles.clearIcon}
//   name="cancel" size={20}
//   color="white"
//   onPress={() => this.setState({
//     text: '',
//     dataSource: this.state.dataSource.cloneWithRows([]),
//   })}
// />

export default Search
