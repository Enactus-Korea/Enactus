import React, { PureComponent } from 'react';
import { View, Text,Image,ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import app_json from '../../../app.json';

class FeedSlide extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      haed: props.head || [],
      minor: props.minor || []
    }
  }
  componentWillMount(){
    // console.log("componentWillMount FeedSlide",this.props)
    // this.props.fetchFeedData(this.props.typeOf)
  }
  renderPagination(index, total, context) {
    return (
      <View style={{
        flex:1,
        backgroundColor: '#ebebeb',
        width: 45
      }}>
      </View>
    )
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Swiper height={146} autoplay={true}>
          {this.props.head.map((data, i) => {
            let slideNum = `slide${i+1}`;
            return(
            <TouchableOpacity
              key={i}
              onPress={() => this.props.navigation.navigate("FeedNotification", {link : data.link})} >
              <Image source={{uri: data.imageLink}} style={styles.headImage}>
                <Text style={styles.text}>{data.title}</Text>
              </Image>
            </TouchableOpacity>
          )})}
        </Swiper>
        <View style={styles.notiWrapper}>
          <Swiper style={styles.notiContent} height={45} autoplay={false} renderPagination={this.renderPagination}>
            {this.props.minor.map((data, i) => (
              <TouchableOpacity
                  key={i}
                  onPress={() => this.props.navigation.navigate("FeedNotification", {link : data.link})}
                  style={styles.flexRow} >
                <Text style={styles.notiText, styles.red}>[공지]</Text>
                <Text style={styles.notiText}>{data.title}</Text>
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  feedWrapper: {
    backgroundColor: '#ebebeb'
  },
  headImage: {
    width: Dimensions.get('window').width,
    height: 146,
    // backgroundColor: '#ccc',
    // resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // slide1: {
  //   // flex: 1,
  //   height: 146,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // backgroundColor: '#9DD6EB',
  // },
  slide2: {
    // flex: 1,
    height: 146,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    height: 146,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  notiWrapper: {
    // flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor:'#ebebeb'
  },
  notiContent: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d9d9d9'
  },
  notiText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400'
  },
  flexRow: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  red: {
    color: 'red'
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

export default FeedSlide
