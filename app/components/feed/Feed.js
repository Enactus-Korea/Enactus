import React, { Component } from 'react';
import { View, Text, ListView, Image, ScrollView,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeedSlide from './FeedSlide'
import FeedComp from './FeedComp'
import styles from './styles'

const REQUEST_URL = "http://localhost:9000/feed";
class Feed extends Component{
  constructor(props){
    super(props);
    this.state = {
			dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
			toggle: false
		}
  }

  componentDidMount(){
    this.props.actions.changeNav('feed');
    this.props.close();
    this.fetchData();
  }

  render() {
    if(!this.state.loaded) {
      return (
        <View style={styles.feedWrapper}>
          <FeedSlide />
          <Text style={{marginTop:100}}> 아직 포스팅 된 글이 없습니다.</Text>
        </View>
      )
    }
    return(
      <View>
        <ScrollView style={styles.feedWrapper}>
          <FeedSlide />
  				<ListView
  					dataSource={this.state.dataSource}
  					renderRow={(feeds) =>
              <FeedComp
                {...this.props}
                username = {feeds.username}
                useruniv = {feeds.useruniv}
                posted = {feeds.posted}
                content = {feeds.content}
                likes = {feeds.likes}
                comment = {feeds.comment}
                textEllipsis = {this.textEllipsis(feeds)}
              />}
          />
  			</ScrollView>
      </View>
    )
  }

	async fetchData(){
    try {
      let response = await fetch(REQUEST_URL);
      let responseJson = await response.json();
      return this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson.feed),
        loaded: true
      })
    } catch(error) {
      console.error(error);
    }
  }
  goDetail(feeds) {
    this.props.state.navigator.replace({id:'detail', data: feeds});
  }
  textEllipsis(feeds) {
    if(feeds.content.length > 100) {
      return (
        <View>
          <TouchableOpacity onPress={() => this.goDetail(feeds)}>
            <Text numberOfLines={3}>
              {feeds.content.substring(0,100-7)} <Text style={styles.readMore}>...더보기</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View>
          <TouchableOpacity onPress={() => this.goDetail(feeds)}>
            <Text>{feeds.content}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

export default Feed
