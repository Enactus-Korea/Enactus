import React from 'react'
import {Text} from 'react-native'
import FeedComp from './FeedComp'

const FeedDetail = (props) => {
  console.log(props.navigation.state.params)
  return(
    <FeedComp {...props.navigation.state.params}/>

)}
FeedDetail.navigationOptions = {
  title: '상세보기',
  header:{
    style: {
      backgroundColor: '#30333C'
    },
    tintColor: 'white'
  }
};
{/* <Text>상세보기</Text> */}
export default FeedDetail
