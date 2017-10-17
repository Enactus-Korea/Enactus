import React, {PureComponent} from 'react'
import { View, Text, ListView, Image, ScrollView,TouchableOpacity, Animated, FlatList } from 'react-native';
import FeedComp from '../Feed/FeedComp'



class UnFoldedMyFeedList extends PureComponent {
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => <FeedComp id={item.id} {...item} user={this.props.user}/>
  render(){
    return (
      <FlatList
        // numColumns={1}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />

    )
  }
}

export default UnFoldedMyFeedList;
