import React, {PureComponent} from 'react'
import { View, Text, ListView, Image, ScrollView,TouchableOpacity, Animated, FlatList } from 'react-native';
import styles from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

class GridMyFeedContainer extends PureComponent {
  render(){
    let content = Boolean(this.props.postImg)
    console.log(this.props.postImg);
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(this.props.detailRoute, {...this.props})}
        style={styles.gridFeedsCont}>
        {
          content
            ? <Image style={styles.gridFeedImage} source={{uri: this.props.postImg}}/>
            : <Text style={styles.gridFeedsContText}>{this.props.content}</Text>
        }
      </TouchableOpacity>
    )
  }
}


class GridMyFeedList extends PureComponent {
  _renderItem = ({item}) => (
    <GridMyFeedContainer
      detailRoute={'Detail'}
      navigation={this.props.navigation}
      key={item.id}
      user={this.props.user}
      {...item}
    />
  )
  _keyExtractor = (item, index) => index;
  render(){
    return (
      <FlatList
        style={styles.gridFeedsFlatList}
        numColumns={3}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

export default GridMyFeedList;
