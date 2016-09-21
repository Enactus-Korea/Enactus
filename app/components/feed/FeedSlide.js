import React, { Component } from 'react';
import { View, Text,Image,ScrollView, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

class FeedSlide extends Component{
  renderPagination(index, total, context) {
    return (
      <View style={{
        position: 'absolute',
        bottom: -25
      }}>
      </View>
    )
  }
  render(){
    return(
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
