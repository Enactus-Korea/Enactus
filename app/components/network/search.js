
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SearchPeople extends Component{
  render(){
    return(
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChange={this.props.onSearchChange}
          placeholder="Search beers..."
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
      </View>
    )
  }
}

export default SearchPeople
