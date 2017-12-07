import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { handleLikeUnLike, fetchFeedData } from './actions'
import { View, Text, ListView, Image, ScrollView,TouchableOpacity, Animated, FlatList, Linking } from 'react-native';
import styles from './styles'
import FeedSlide from './FeedSlide'
import FeedComp from './FeedComp'
import app_json from '../../../app.json';
// import { addNavigationHelpers } from 'react-navigation'



const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

class SeparatorComponent extends PureComponent {
  render() {
    return <View style={styles.separator} />;
  }
}

class FeedList extends PureComponent {
  state = {
    data: this.props.feed,
    loaded: false,
    userloaded: false,
    dataloaded: false,
    head: [],
    minor: []
	}
  componentDidMount(){
    this.props.fetchFeedData(this.props.typeOf)
    this.fetchData();
    if(this.props.user){
      this.setState({userloaded: true})
    }
    // if (Platform.OS === 'android') {
    //   Linking.getInitialURL().then(url => {
    //     this.navigate(url);
    //   });
    // } else {
      Linking.addEventListener('url', this.handleOpenURL);
    // }
  }
  async fetchData(){
    const REQUEST_URL = app_json.REQUEST_URL || "http://localhost:9000";
    let response = await fetch(`${REQUEST_URL}/notification/head`);
    let responseMinor = await fetch(`${REQUEST_URL}/notification/minor`);
    let data = await response.json();
    let minor = await responseMinor.json();
    console.log(data.notification);
    return this.setState({
              head: data.notification,
              minor: minor.notification,
              dataloaded: true
            })
  }
  componentWillReceiveProps(newProps){
    if(newProps.feed !== this.props.feed){
      // console.log("componentWillReceiveProps",newProps.feed.length);
      this.setState({data: newProps.feed, loaded: true})
    }
    if(newProps.user !== this.props.user){
      this.setState({userloaded: true})
    }
  }
  _renderSlideComponent(type) {
    let { feed, ...restProps } = this.props;
    return type === "feed" && <FeedSlide {...restProps} head={this.state.head} minor={this.state.minor}/>
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL = (event) => {
    // debugger
    this.navigate(event.url);
  }
  navigate = (url) => {
    //FIXME: 하나씩 맵을 돌려서 해야하는가? 아니면 서버에서 하나만 받아와서?
    const { navigate } = this.props.navigation,
          user = this.props.user;
    let route = url.replace(/.*?:\/\//g, ''),
        nav = route.split('/')[0],
        feedId = route.split('/')[1],
        navProps = this.props.feed.find(f => f._id === feedId);
    navigate(nav, {...navProps, user})
  }
  render(){
    const { typeOf } = this.props, { loaded, userloaded, data, virtualized, dataloaded } = this.state
    if(loaded && userloaded && dataloaded){
      //TODO: 데이터 불러오는 애니메이션
      // console.log("render" , this.props.typeOf);
      return(
        <AnimatedFlatList
            style={typeOf === 'feed' && styles.feedPage}
            ItemSeparatorComponent={SeparatorComponent}
            ListHeaderComponent={() => this._renderSlideComponent(typeOf)}
            data={data}
            disableVirtualization={!virtualized}
            // ref={this._captureRef}
            onRefresh={this._onRefresh}
            refreshing={false}
            keyExtractor={item => item._id}
            renderItem={this._renderItemComponent}
            // shouldItemUpdate={this._shouldItemUpdate}
            viewabilityConfig={VIEWABILITY_CONFIG}
            // getItemLayout={this.state.fixedHeight ?
            //   this._getItemLayout :
            //   undefined
            // }
            // legacyImplementation={false}
            // onScroll={this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}
          />

      )
    }
    return(
      <View style={styles.feedWrapper}>
        {/* <FeedSlide  /> */}
        <View style={styles.feedRendering}>
          <Text style={styles.feedRenderingText}> 피드 불러오는 중</Text>
        </View>
      </View>
    )
  }
  _renderItemComponent = ({item}) => {
    let { feed , ...restProps } = this.props;
    return <FeedComp {...restProps} {...item}/>
  }
  _onRefresh = () => {
    alert('onRefresh: nothing to refresh :P');
  }
}

const mapStateToProps = (state) => ({
  user: state.permissions.user,
  feed: state.feeds.feed
})

export default connect(mapStateToProps, { handleLikeUnLike, fetchFeedData } )(FeedList)
// export default FeedList;
