import React, {Component} from 'react'
import {ImagePickerIOS, TouchableOpacity, Image, Modal, View, Text, LayoutAnimation} from 'react-native'
import styles from './styles'


// style= {styles.modal}
class ProfUserImg extends Component {
  constructor(){
    super()
    this.state = {
      modalVisible: false,
    }
  }
  chooseImageFromGallery = () => {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, error => console.error(error));
  }
  chooseImageFromCamera = () => {
    ImagePickerIOS.openCameraDialog({}, imageUri => {
      this.setState({image: imageUri});
    }, error => console.error(error));
  }
  // chooseWay2GetImg = () => {
  //
  // }
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
            transparent={false}
            visible={this.state.modalVisible}
            style={styles.modal}
            >
            <View style={{marginTop: 50}}>
               <TouchableOpacity onPress= {() => this.setState({modalVisible: false})}>
                  <Text>Hide Modal</Text>
               </TouchableOpacity>
            </View>
         </Modal>
        <Image
          style={styles.profile_img}
          source={require('../../assets/defaultUser.jpg')}/>
      </TouchableOpacity>
    )
  }
}




export default ProfUserImg

/* <Modal>

</Modal> */


    // <Modal
    //   animationType={"slide"}
    //   transparent={false}
    //   visible={this.state.CameraVisible}
    //   onRequestClose={() => {alert("Modal has been closed.")}}
    //   >
    // </Modal>
