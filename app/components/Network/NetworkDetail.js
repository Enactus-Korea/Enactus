import React, {Component} from 'react'
// import {connect} from 'react-redux';
import {View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
// import ProfUserImg from './ProfUserImg'
import styles from './styles'


class NetworkDetail extends Component{
  render(){
    console.log("NetworkDetail",this.props);
    const { params } = this.props.navigation.state
    return(
      <View>
        <View style={styles.detail_top}>
          <Image
            style={styles.detail_img}
            source={params.userImg ? {uri: params.userImg} : require('../../assets/defaultUser.jpg')}/>
          <Text style={styles.detail_name}>{params.name}</Text>
          <Text style={styles.detail_univ}>{params.univ} 인액터스</Text>
          <Text style={styles.detail_selfIntro}>{params.selfIntro}</Text>
        </View>
      </View>
    )
  }
}

export default NetworkDetail
