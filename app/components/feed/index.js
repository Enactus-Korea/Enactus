import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

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

  fetchData(){
		fetch(REQUEST_URL)
		.then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.feed),
        loaded: true
      })
    })
		console.log("fectching" + REQUEST_URL)
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

  render() {
    if(!this.state.loaded) {
      return (
        <View style={styles.feedWrapper}>
  				{this.renderSlide()}
          <Text style={{marginTop:100}}> 아직 포스팅 된 글이 없습니다.</Text>
        </View>
      )
    }
    return(
      <View style={styles.feedWrapper}>
				{this.renderSlide()}
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderFeeds.bind(this)}
					/>
			</View>
    )
  }

  renderPagination(index, total, context) {
    return (
      <View style={{
        position: 'absolute',
        bottom: -25
      }}>
      </View>
    )
  }

  renderSlide() {
    return (
      <View>
        <Swiper style={styles.wrapper} height={165} autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <View style={styles.notiWrapper}>
          <Swiper style={styles.notiContent} height={42} autoplay={true} renderPagination={this.renderPagination}>
            <View style={styles.flexRow} >
              <Text style={styles.notiText, styles.red}>[공지]</Text>
              <Text style={styles.notiText}>이고은 PM 축 결혼</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.notiText, styles.red}>[공지]</Text>
              <Text style={styles.notiText}>Text 2</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.notiText, styles.red}>[공지]</Text>
              <Text style={styles.notiText}>Text 3</Text>
            </View>
          </Swiper>
        </View>
      </View>
    )
  }

  renderFeeds(feeds){
		return(
			<View style={styles.feedListView} >
				<View style={styles.feedContainer}>
          <View style={styles.spaceBetween}>
					<View style={styles.feedTopContainer}>
            <Image
                source={require('./user.png')}
                style={styles.userImage}
                />
  					<View style={styles.feedInfoContainer}>
  						<Text style={styles.feedUser}>{feeds.username}</Text>
  						<Text style={styles.feedUserUniv}>{feeds.useruniv}</Text>
  					</View>
					</View>
          <Text style={styles.feedUserTime}>{feeds.posted}</Text>
          </View>
					<View  style={styles.ctxContainer}>
							<View style={styles.txtContents}>
              {this.textEllipsis(feeds)}</View>
					</View>
				</View>
        <View style={styles.likeAndComment}>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>좋아요 · {feeds.likes.length}</Text>
          </View>
          <View style={styles.likeAndCommentBox}>
            <Text style={styles.textAlign}>댓글 · {feeds.comment.length}</Text>
          </View>
          <View style={styles.shareText}>
            <Text style={styles.textAlign}>공유</Text>
          </View>
        </View>
			</View>
		)
	}

  goDetail(feeds) {
    this.props.state.navigator.replace({id:'detail', data: feeds});
  }

}

export default Feed
