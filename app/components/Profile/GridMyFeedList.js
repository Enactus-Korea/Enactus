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
    return (
      <View style={styles.gridFeedsCont}>
        <Text>{this.props.content}</Text>
      </View>
    )
  }
}


class GridMyFeedList extends PureComponent {
  _renderItem = ({item}) => (
    <GridMyFeedContainer
      key={item.id}
      {...item}
    />
  )
  _keyExtractor = (item, index) => item.id;
  render(){
    return (
      <FlatList
        numColumns={3}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        // ItemSeparatorComponent={SeparatorComponent}
      />
    )
  }
}

export default GridMyFeedList;
