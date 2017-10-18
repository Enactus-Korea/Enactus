import React, { Component } from 'react';
import { View, Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import slideData from './FeedSlideData'

class FeedSlide extends Component{
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
          {slideData.imageline.map((data, i) => {
            let slideNum = `slide${i+1}`;
            return(
            <TouchableOpacity
              key={i}
              onPress={() => this.props.navigation.navigate("SlideDetail", data)}
              style={styles[slideNum]}>
              <Text style={styles.text}>{data.title}</Text>
            </TouchableOpacity>
          )})}
        </Swiper>
        <View style={styles.notiWrapper}>
          <Swiper style={styles.notiContent} height={45} autoplay={false} renderPagination={this.renderPagination}>
            {slideData.textline.map((data, i) => (
              <TouchableOpacity
                  key={i}
                  onPress={() => this.props.navigation.navigate("SlideDetail", data)}
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
  slide1: {
    // flex: 1,
    height: 146,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
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
