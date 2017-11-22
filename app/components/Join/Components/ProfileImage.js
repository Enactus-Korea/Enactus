import React, {Component} from 'react'
import {ImagePickerIOS, TouchableOpacity, Image, Modal, View, Text, LayoutAnimation, ActionSheetIOS, Alert, ImageEditor} from 'react-native'
import styles from './styles'
import ImageCropModal from './ImageCropModal'


// style= {styles.modal}
class ProfileImage extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      cropVisible: false,
      cropImg: "",
      image: props.userImg || null,
    }
    this.handlePostImage = this.handlePostImage.bind(this)
  }
  componentWillReceiveProps(newProps){
    if(newProps.userImg !== this.props.userImg){
      this.setState({image: newProps.userImg})
    }
  }
  handleChooseImage = (openType) => {
    ImagePickerIOS[openType](
      //config
      {},
      //successCB
      (imageUri) => {
        this.setState({
          cropVisible: true,
          cropImg: imageUri
        })
      },
      //failedCB
      cancle => false);

  }
  showActionSheet = () => {
    var BUTTONS = [ '사진첩', '카메라', '취소'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: 2,
      title: '프로필 사진 설정',
    },
    (buttonIndex) => {
      if(buttonIndex === 2){
        return false
      }
      let selectType = buttonIndex === 0 ? "openSelectDialog" : "openCameraDialog"
      this.handleChooseImage(selectType)
    });
  }
  handlePostImage(cropData, imageUri) {
    // debugger
    console.log("handlePostImage",cropData, imageUri);
    ImageEditor.cropImage(
      imageUri,
      cropData,
      (successURI) => {
        this.setState({
          image : successURI,
          cropVisible: false
        })
      },
      (errURI) => {console.log(errURI)}
    )
  }
  render(){
  //["register", "setting", "profile", "feed", "search"]
    const ImageStyle = {
        width: this.props.imageSize,
        height: this.props.imageSize,
        borderRadius: this.props.imageSize*0.5,
        borderWidth: 0.5,
        borderColor: '#5e5e5e',
        marginBottom: 10,
    }
    return(
      <TouchableOpacity
        onPress={this.showActionSheet}>
        <ImageCropModal visible={this.state.cropVisible} imageUri={this.state.cropImg} handlePostImage={this.handlePostImage}/>
        <Image
          style={ImageStyle}
          source={this.state.image ? {uri: this.state.image} : require('../../../assets/defaultUser.jpg')}/>
      </TouchableOpacity>
    )
  }
}




export default ProfileImage


//
//
// <Modal
//     animationType={"slide"}
//     transparent={true}
//     visible={this.state.modalVisible}
//     >
//     <View style={styles.modal}>
//        <TouchableOpacity
//          style={styles.modalBtn}
//          onPress= {() => this.chooseImageFromGallery()}>
//           <Text>사진첩</Text>
//        </TouchableOpacity>
//        <TouchableOpacity
//          style={styles.modalBtn}
//          onPress= {() => this.chooseImageFromCamera()}>
//           <Text>사진찍기</Text>
//        </TouchableOpacity>
//        <TouchableOpacity
//          style={styles.modalBtn}
//          onPress= {() => this.setState({modalVisible: false})}>
//           <Text>취소</Text>
//        </TouchableOpacity>
//     </View>
//  </Modal>
