import React, { Component } from 'react';
import { View, Text,Image,ScrollView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

class FeedSlide extends Component{
  renderPagination(index, total, context) {
    return (
      <View style={{
        backgroundColor: '#ebebeb',
        width: 45
      }}>
      </View>
    )
  }
  render(){
    return(
      <View>
        <Swiper height={146} autoplay={true}>
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
          <Swiper style={styles.notiContent} height={45} autoplay={false} renderPagination={this.renderPagination}>
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
}

var styles = StyleSheet.create({
  feedWrapper: {
    backgroundColor: '#ebebeb'
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
