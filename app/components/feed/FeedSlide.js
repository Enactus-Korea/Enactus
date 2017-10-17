import React, { Component } from 'react';
import { View, Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';


let slideData = {
  "imageline" : [{
      "image" : "",
      "title" : "2017 Enactus Worldcup",
      "subtitle" : "2017 인액터스 월드컵 옵저버 신청 안내",
      "content" : "2017 Enactus Worldcup 옵저버 등록은 참석자 정보를 취합 후 사무국에서 일괄적으로 월드와이드에 등록해야 하므로 아래 링크를 클릭하셔서 내용을 빠짐없이 작성하여 8월 31일까지 등록을 완료해 주시면 감사하겠습니다.",
      "contentImg" : ""
    },{
        "image" : "",
        "title" : "[ETC] 2017 상반기 인액터스 트레이닝 컨퍼런스 안내",
        "subtitle" : "",
        "content" : "트레이닝 컨퍼런스에서는 '기술로 만드는 더 나은 세상' 이라는 주제로 기술을 통해 사회 혁신을 이루고 있는 기업 연사들을 초청하여 진보하는 기술 시대에 인액터스가 가지는 진정한 가치를 공유하는 시간을 가지고자 합니다.",
        "contentImg" : ""
      }
  ],
  "textline" : [{
        "title" : "2017 인액터스 코리아 사무국 하반기 인턴 모집",
        "subtitle" : "2017 하반기 인액터스 코리아를 이끌어나갈 열정있는 인턴을 모집합니다!",
        "content" : "인액터스 코리아 30개 대학의 성장을 돕는 다양한 프로그램들을 적극적으로 개발하고자 하는 열정 있는 모든 분들을 기다립니다! 아래의 내용을 살펴보시고 적극적인 지원 부탁 드립니다!",
        "contentImg" : ""
    },{
        "title" : "[ETC] 2017 상반기 인액터스 트레이닝 컨퍼런스 안내",
        "subtitle" : "",
        "content" : "트레이닝 컨퍼런스에서는 '기술로 만드는 더 나은 세상' 이라는 주제로 기술을 통해 사회 혁신을 이루고 있는 기업 연사들을 초청하여 진보하는 기술 시대에 인액터스가 가지는 진정한 가치를 공유하는 시간을 가지고자 합니다.",
        "contentImg" : ""
      }
  ]
};

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
