import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';

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

  renderPagination(index, total, context) {
    return (
      <View style={{
        position: 'absolute',
        bottom: -25
      }}>
      </View>
    )
  }
  render() {
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
                source={require('./feed/user.png')}
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
							<Text numberOfLines={3} style={styles.txtContents}>
              {((feeds.content).length > 100) ?
                (((feeds.content).substring(0,100-7)) + '...더보기') :
                feeds.content }</Text>
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
}

var styles = StyleSheet.create({
  feedWrapper: {
    backgroundColor: '#f2f2f2'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  notiWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#f2f2f2'
  },
  notiContent: {
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#e9e9e9'
  },
  notiText: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400'
  },
  flexRow: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  red: {
    color: 'red'
  },
  userImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 20
  },
  feedListView: {
    height: 185,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    backgroundColor: '#fff',
  },
  feedContainer: {
    padding: 15
  },
  feedTopContainer: {
    flexDirection: 'row'
  },
  feedInfoContainer: {
    marginLeft: 10
  },
  feedUser: {
    fontWeight: '500'
  },
  feedUserUniv: {
    color: '#a7a7a7'
  },
  feedUserTime: {
    color: '#ccc'
  },
  ctxContainer: {
    marginTop: 15
  },
  likeAndComment: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#e9e9e9',
    backgroundColor: '#fcfcfc',
    textAlign: 'center',
  },
  likeAndCommentBox: {
    width: Dimensions.get('window').width/3,
    padding: 15,
    borderRightWidth: 1,
    borderColor: '#e9e9e9'
  },
  shareText: {
    width: Dimensions.get('window').width/3,
    padding: 15,
  },
  textAlign: {
    textAlign: 'center',
    color: '#bfbfbf',
    fontWeight: '500'
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Feed
