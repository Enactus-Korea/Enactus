import React, {Component} from 'react'
import {ImagePickerIOS, TouchableOpacity, Image, Modal, View, Text, LayoutAnimation, Alert} from 'react-native'
import styles from './styles'


// style= {styles.modal}
class ProfUserImg extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      image: props.userImage || null,
    }
  }
  chooseImageFromGallery = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri, modalVisible: false});
    }, error => console.error(error));
  }
  chooseImageFromCamera = () => {
    ImagePickerIOS.openCameraDialog({}, imageUri => {
      this.setState({image: imageUri, modalVisible: false});
    }, error => console.error(error));
  }
  onPress = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({modalVisible: true})
    }
  render(){
    return(
      <TouchableOpacity
        onPress={() => this.onPress()}>
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={styles.modal}>
               <TouchableOpacity
                 style={styles.modalBtn}
                 onPress= {() => this.chooseImageFromGallery()}>
                  <Text>사진첩</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.modalBtn}
                 onPress= {() => this.chooseImageFromCamera()}>
                  <Text>사진찍기</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.modalBtn}
                 onPress= {() => this.setState({modalVisible: false})}>
                  <Text>취소</Text>
               </TouchableOpacity>
            </View>
         </Modal>
        <Image
          style={styles.profile_img}
          source={this.state.image ? {uri: this.state.image} : require('../../assets/defaultUser.jpg')}/>
      </TouchableOpacity>
    )
  }
}




export default ProfUserImg
