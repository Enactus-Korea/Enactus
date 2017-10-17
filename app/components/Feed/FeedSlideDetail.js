import React, { Component } from 'react';
import { View, Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

class FeedSlideDetail extends Component{
  render(){
    console.log("FeedSlideDetail",this.props);
    let { title, subtitle, content } = this.props.navigation.state.params;
    return(
      <View style={{flex:1}}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
        <Text>{content}</Text>
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
    fontSize: 30,
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

export default FeedSlideDetail
