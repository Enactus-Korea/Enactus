import React from 'react'
import {Text, Button} from 'react-native'
import FeedComp from './FeedComp'

const FeedDetail = (props) => {
  console.log(props.navigation.state.params)
  return(
    <FeedComp {...props.navigation.state.params}/>

)}
FeedDetail.navigationOptions = {
  header: (props) => ({
    title: '상세보기',
    left: <Button title='뒤로' color='#fff' onPress={() => props.goBack()} />,
    style: {
      backgroundColor: '#30333C'
    },
    tintColor: 'white'
  })
};

export default FeedDetail


// header: (props) => ({
//   title: '회원가입',
//   left: <Button title='뒤로' color='#fff' onPress={() => props.goBack()} />,
//   right: <Button title='완료' color='#FEC13A' onPress={() => props.state.params.handleSave()} />,
//   style: {
//     backgroundColor: '#30333C'
//   },
//   tintColor: 'white'
// })
