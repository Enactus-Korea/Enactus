import React, {Component} from 'react'
import { View, Text, Animated, SectionList, StyleSheet} from 'react-native'
import NetworkRow from './NetworkRow'



const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);
const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

const renderSectionHeader = ({section}) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{section.key}</Text>
  </View>
);


class Network extends Component {
  state = {
    data: [],
    loaded: false,
  }
  componentDidMount(){
    this.fetchData();
  }
  async fetchData(){
    const REQUEST_URL = "http://localhost:9000";
    let response = await fetch(`${REQUEST_URL}/user/fetch/by/univ/section`);
    let data = await response.json();
    return this.setState({ data , loaded: true })
  }
  renderItemComponent = ({item}) => <NetworkRow user={item} navigation={this.props.navigation} />
  render(){
    return(
      <AnimatedSectionList
          // ListHeaderComponent={HeaderComponent}
          // ListFooterComponent={FooterComponent}
          ItemSeparatorComponent={() => <View style={styles.customSeparator}></View>}
          // enableVirtualization={this.state.virtualized}
          // onRefresh={() => alert('onRefresh: nothing to refresh :P')}
          keyExtractor={item => item._id}
          renderItem={this.renderItemComponent}
          renderSectionHeader={renderSectionHeader}
          sections={this.state.data}
          style={styles.list}
          viewabilityConfig={VIEWABILITY_CONFIG}
        />
    )
  }
}

const styles = StyleSheet.create({
  customSeparator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height:1
  },
  header: {
    backgroundColor: '#e9eaed',
  },
  headerText: {
    padding: 4,
    fontWeight: '600',
  },
  list: {
    backgroundColor: 'white',
  },
  optionSection: {
    flexDirection: 'row',
  },
  searchRow: {
    paddingHorizontal: 10,
  },
  separatorText: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: 7,
  },
});

export default Network
