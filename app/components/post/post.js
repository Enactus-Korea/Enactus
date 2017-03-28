import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image,TextInput, Dimensions, Text, ImagePickerIOS , CameraRoll, StyleSheet, View,TouchableOpacity,AlertIOS, Modal,StatusBar, Picker, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from './actions'
// import PostHead from './postHead'
// import PostCamera from './postCamera'
// import PostAlbum from './postAlbum'
import styles from './PostStyles'

let deviceHeight = Dimensions.get('window').height,
deviceWidth = Dimensions.get('window').width;

let showBoards = [{val:'global', name: '전체공개'},{val:'bamboo', name:'대나무숲'}];
let PickerItem = Picker.Item;

class Post extends Component{
  constructor(props){
    super(props)
    this.state = {
      userimg: 'Avatar',
      content: '',
      avatarSource: null,
      modalVisible: true,
      ImageVisible: false,
      CameraVisible: false,
      board: '',
      boardModal: false,
      timeIndex:0,
      image: null,
      offSet: new Animated.Value(deviceHeight),
      // imageSource: '', =>  prop 이상하다고 오류 메시지 생김
    }
    console.log("state offSet",this.state.offSet);
    console.log(this.state.board);
  }
  changeBoard = (selected) => {
    this.setState({ board: selected })
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
    let { board } = this.state;
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
          <Image style={styles.icon} source={require('../../assets/user.png')}></Image>
          <View style={styles.InfoContainer}>
            <Text style={styles.User}>이고은</Text>{/*userInfo.userName*/}
            <Text style={styles.UserUniv}>숭실대학교 알룸나이</Text>{/*userInfo.userUniv*/}
          </View>
          <TouchableOpacity style={PicSt.button} underlayColor="transparent" onPress={ () => this.setState({boardModal: true}) }>
            {console.log(board)}
             <Text style={PicSt.buttonText}>{board === '' ? '게시판선택' : showBoards.find(b => b.val === board).name }</Text>
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
        { this.state.boardModal ? <PickerBoard closeModal={() => this.setState({ boardModal: false })} offSet={this.state.offSet} changeBoard={this.changeBoard} showBoard={this.state.board} /> : null }
        </View>
      </View>
    )
  }
}


class PickerBoard extends Component{
  componentDidMount(){
     Animated.timing(this.props.offSet, {
        duration: 400,
        toValue: 200
      }).start()
  }
  closeModal = () => {
     Animated.timing(this.props.offSet, {
        duration: 400,
        toValue: deviceHeight
     }).start(this.props.closeModal);
  }
  render() {
    return (
      <Animated.View style={{ height: 80 }}>
        <View style={PicSt.closeButtonContainer}>
          <TouchableOpacity onPress={ this.closeModal } underlayColor="transparent" style={PicSt.closeButton}>
            <Text style={PicSt.closeButtonText}>선택하기</Text>
          </TouchableOpacity>
        </View>
        {showBoards.map((brd, i) => (
          <TouchableOpacity key={i} onPress={() => this.props.changeBoard(brd.val)} style={PicSt.selectOptions}>
            <Text>{brd.name}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    )
  }
}
const PicSt = StyleSheet.create({
  showtimeContainer: {
   borderTopColor: '#ededed',
    borderTopWidth:1
  },
  showtime: {
   padding:20,
    textAlign: 'center'
  },
  button: {
    borderColor:'#5e5e5e',
    borderWidth: 0.5,
    borderRadius: 2,
    paddingVertical: 6,
    paddingHorizontal: 15
  },
  selectOptions:{
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
    height: 50
  },
  closeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopColor: '#e2e2e2',
    borderTopWidth: 1,
    borderBottomColor: '#e2e2e2',
    borderBottomWidth:1,
    backgroundColor: 'white'
  },
  closeButton: {
   paddingRight:10,
    paddingTop:10,
    paddingBottom:10
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#5e5e5e'
  },
  closeButtonText: {
   color: '#027afe'
  },

});

function mapStateToProps(state){
  return {
    user: state.permissions.user
  }
}

// export default Post
export default connect(mapStateToProps,actions)(Post)
//이미지 추가할 경우
// { this.state.avatarSource === null ?
//   <Icon name="ios-camera" size={30} color="#8899a5" />
//   :
//   <Image style={styles.avatar} source={this.state.avatarSource} />
// }

/* <Picker
  style={{ width: 100, height: 50}}
  selectedValue={this.state.board}
  onValueChange={(selected) => this.setState({board: selected})}
  mode="dialog"
  >
  <Picker.Item label="전체공개" value="global" />
  <Picker.Item label="대나무숲" value="bamboo" />
</Picker> */


/* <Picker
  style={PicSt.selectOptions}
  selectedValue={this.props.showBoard}
  itemStyle={{height: 200, margin:0, padding: 0}}
  onValueChange={(selected) => this.props.changeBoard(selected)}>
  {showBoards.map((brd, i) => (
    <PickerItem key={i}
      name={brd.val}
      value={brd.val}
      label={brd.name}
    />
  ))}
</Picker> */

/* <Animated.View style={{ transform: [{translateY: this.props.offSet}] }}> */



  // AlbumModal() {
  //   return(
  //     <Modal
  //       animationType={"slide"}
  //       transparent={false}
  //       visible={this.state.ImageVisible}
  //       onRequestClose={() => {alert("Modal has been closed.")}}
  //       >
  //       <PostAlbum
  //         {...this.props}
  //         close = {() => this.props.close}
  //         navigator={navigator}
  //         setImageVisible={this.setImageVisible.bind(this)}/>
  //     </Modal>
  //   )
  // }


  // setCameraVisible(visible) {
  //   // post.js에서 param이 넘어올 때, bind(this)에 담겨서 넘어온다.
  //   this.setState({CameraVisible: visible});
  // }
  //
  // CameraModal() {
  //   return(
  //     <Modal
  //       animationType={"slide"}
  //       transparent={false}
  //       visible={this.state.CameraVisible}
  //       onRequestClose={() => {alert("Modal has been closed.")}}
  //       >
  //       /* <PostCamera
  //         {...this.props}
  //         setCameraVisible={this.setCameraVisible.bind(this)}/> */
  //     </Modal>
  //   )
  // }
  // setImageVisible(visible) {
  //   // post.js에서 param이 넘어올 때, bind(this)에 담겨서 넘어온다.
  //   this.setState({ImageVisible: visible});
  // }



  /* <PostHead
    setModalVisible = {this.props.setModalVisible}
    onPost = {this.onPost()}
    content = {this.state.content}
  /> */


  // hideModal() {
  //   this.setState = {
  //     content: ''
  //   }
  //   this.props.setModalVisible(false);
  //   // TODO: refreshing 추가
  // }
