import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { handleLikeUnLike, fetchFeedData } from './actions'
import { View, Text, ListView, Image, ScrollView,TouchableOpacity, Animated, FlatList } from 'react-native';
import styles from './styles'
import FeedSlide from './FeedSlide'
import FeedComp from './FeedComp'
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
    userloaded: false
	}
  componentDidMount(){
    this.props.fetchFeedData(this.props.typeOf)
    if(this.props.user){
      this.setState({userloaded: true})
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps.feed !== this.props.feed){
      console.log("componentWillReceiveProps",newProps.feed.length);
      this.setState({data: newProps.feed, loaded: true})
    }
    if(newProps.user !== this.props.user){
      this.setState({userloaded: true})
    }
  }
  render(){
    const { typeOf } = this.props, { loaded, userloaded, data, virtualized } = this.state
    if(loaded && userloaded){
      //TODO: 데이터 불러오는 애니메이션
      // console.log("render" , this.props.typeOf);
      return(
        <AnimatedFlatList
            style={typeOf === 'feed' && styles.feedPage}
            ItemSeparatorComponent={SeparatorComponent}
            ListHeaderComponent={typeOf === 'feed' && FeedSlide}
            data={data}
            disableVirtualization={!virtualized}
            ref={this._captureRef}
            onRefresh={this._onRefresh}
            refreshing={false}
            keyExtractor={item => item._id}
            renderItem={this._renderItemComponent}
            shouldItemUpdate={this._shouldItemUpdate}
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
        <FeedSlide />
        <Text style={{marginTop:100}}> 피드 불러오는 중</Text>
      </View>
    )
  }
  _renderItemComponent = ({item}) => <FeedComp {...this.props} {...item}/>
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
