import React, {PureComponent} from 'react'
import {View , Text, TextInput, Animated , Easing, TouchableOpacity, SectionList, Navigator} from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'
import Dimensions from 'Dimensions'
import { NetworkRow } from '../Network'
import { FeedComp } from '../Feed'

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

const renderSectionHeader = ({section}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{section.key}</Text>
  </View>
);
const REQUEST_URL = "http://localhost:9000";


class Search extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    headerVisible: false
  })
  state = {
    searchText: '',
    searchUsers: '',
    searchFeeds: '',
    userloaded: false,
    feedloaded: false
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(Dimensions.get('window').width/1.05)
  }
  componentDidMount(){
    this.fetchFeedData()
    this.fetchUserData()
  }
  async fetchFeedData(){
    let response = await fetch(`${REQUEST_URL}/feed`);
    let feedData = await response.json();
    return this.setState({ searchFeeds: feedData.feed , userloaded: true })
  }
  async fetchUserData(){
    let response = await fetch(`${REQUEST_URL}/user`);
    let userData = await response.json();
    return this.setState({ searchUsers: userData.users , feedloaded: true })
  }
  handleChange = (name, text) => {
    this.setState({[name]: text})
  }
  renderSearchBar = () => {
    return(
      <View style={styles.sch_input_bar}>
        <TextInput
          style={styles.sch_input}
          onChangeText={(text) => this.handleChange("searchText",text)}
          placeholder='멤버 혹은 뉴스피드 검색'
          placeholderTextColor='#8E8F92'
        />
      </View>
    )
  }
  renderSearchUsers = ({item}) => <NetworkRow user={item} navigation={this.props.navigation} route={'SearchUserDetail'}/>
  renderSearchFeeds = ({item}) => <FeedComp {...item} navigation={this.props.navigation} detailRoute={'SearchFeedDetail'} user={this.props.user}/>
  renderSearchContent = (searchUsers, searchFeeds) => (
    [
      { renderItem: this.renderSearchUsers,
        key: '네트워크',
        data: searchUsers
      },
      { renderItem: this.renderSearchFeeds,
        key: '피드',
        data: searchFeeds
      }
    ]
  )
  renderEmptySearch = (searchUsers) => [{renderItem: this.renderSearchUsers, key: '1자 이상으로 검색어를 입력하세요.', data: ''}]
  render(){
    let searchText = this.state.searchText.trim(), { searchUsers, searchFeeds, userloaded, feedloaded } = this.state;
    const animatedStyle = { width: this.animatedValue }
    if(searchText.length > 1) {
      searchFeeds = searchFeeds.filter(l => l.name.match(searchText)
          || l.content.match(searchText));
      searchUsers = searchUsers.filter(l => l.name.match(searchText))
    }
    return(
      <View>
        {this.renderSearchBar()}
        <AnimatedSectionList
            ItemSeparatorComponent={() => <View style={styles.customSeparator}></View>}
            // enableVirtualization={this.state.virtualized}
            // onRefresh={() => alert('onRefresh: nothing to refresh :P')}
            keyExtractor={item => item._id}
            renderSectionHeader={renderSectionHeader}
            sections={(!searchText || (searchText.length === 1)) ? this.renderEmptySearch(searchUsers) : this.renderSearchContent(searchUsers, searchFeeds)}
            style={styles.list}
            viewabilityConfig={VIEWABILITY_CONFIG}
          />
      </View>

    )

  }
}

const mapStateToProps = (state) => ({
  user: state.permissions.user
})

export default connect(mapStateToProps, null)(Search)
// export default Search

// headerTitle: <TextInput
//           style={styles.sch_input}
//           onChangeText={(text) => navigation.state.params.handleChange("sch",text)}
//           placeholder='멤버 혹은 뉴스피드 검색'
//           placeholderTextColor='#8E8F92'
//         />,
// headerRight: null,
// headerLeft: null,
// headerStyle: { backgroundColor: '#30333C' },
// headerTintColor: 'white',

//  <View style={styles.sch_top}>
//         <TextInput
//           // value={this.state.sch}
//           style={styles.sch_input}
//           // onChangeText={(text) => this.setState({sch: text})}
//           placeholder='멤버 혹은 뉴스피드 검색'
//           placeholderTextColor='#8E8F92'
//         />
//          <Animated.View>
//       </View>
