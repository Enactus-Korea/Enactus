import React, { Component } from 'react';
import { Image,TextInput, Dimensions, Text, ImagePickerIOS , CameraRoll, StyleSheet, View,TouchableOpacity,AlertIOS, Modal,StatusBar, Picker, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import PostHead from './postHead'
// import PostCamera from './postCamera'
// import PostAlbum from './postAlbum'
import styles from './PostStyles'

let showBoards = [{val:'global', name: '전체공개'},{val:'bamboo', name:'대나무숲'}];

class Post extends Component{
  constructor(props){
    super(props)
    this.state = {
      userimg: props.userImage || null,
      content: '',
      avatarSource: null,
      modalVisible: false,
      ImageVisible: false,
      CameraVisible: false,
      board: 'global',
      boardModal: false,
      timeIndex:0,
      image: null,
      // imageSource: '', =>  prop 이상하다고 오류 메시지 생김
    }
  }
  changeBoard = (selected) => {
    this.setState({ board: selected, modalVisible:false })
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
  callbackPosting() {
    AlertIOS.alert('Enactus', '작성되었습니다', this.hideModal())
  }
  onPost(){
    return(
      <TouchableOpacity onPress={() => this.onPostPressed()}>
        <Text style={styles.TextBold}>게시</Text>
      </TouchableOpacity>
    )
  }
  render(){
    console.log(this.props)
    let { board, userimg } = this.state;
    let { user } = this.props;
    return(
      <View>
        <View style={styles.post_top}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
            <Text style={styles.TextBold}>취소</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>글쓰기</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
            <Text style={styles.TextBold}>완료</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={userimg? {uri: this.state.userimg} : require('../../assets/defaultUser.jpg')}></Image>
          <View style={styles.InfoContainer}>
            <Text style={styles.User}>{this.props.user.name}</Text>
            <Text style={styles.UserUniv}>{user.univ} {user.userType}</Text>
          </View>
          <TouchableOpacity style={styles.button} underlayColor="transparent" onPress={ () => this.setState({modalVisible: true}) }>
             <Text style={styles.buttonText}>{showBoards.find(b => b.val === board).name}</Text>
           </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          {this.state.image?<Image style={{flex: 1}} source={{uri: this.state.image}}></Image>:null}
        </View>
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          onChangeText={ (text)=> this.setState({content: text}) }
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={this.chooseImageFromCamera}
            >
            <Icon name="ios-camera" size={30} color="#8899a5" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={this.chooseImageFromGallery}>
            <Icon name="ios-images" size={30} color="#8899a5" />
          </TouchableOpacity>
        </View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={styles.modal}>
            {showBoards.map((brd, i) => (
              <TouchableOpacity
                style={styles.modalBtn}
                key={i} onPress={() => this.changeBoard(brd.val)}>
                <Text>{brd.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
        </View>
      </View>
    )
  }
}

export default Post;
