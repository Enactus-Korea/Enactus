import React, {Component} from 'react';
import { CameraRoll, ScrollView,Modal,View, StyleSheet,Image,Text,Dimensions,TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
import PostCamera from './postCamera'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    width: width,
    height:height,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: width/3-5,
    height: width/3-5,
    marginTop:0,
    marginBottom:5,
    marginLeft:2.5,
    marginRight:2.5,
    borderColor: "lightgray",
  },
  camera:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

class ImageList extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      images:[],
      CameraVisible: false,
    }
  }
  storeImages(data) {
    const assets = data.edges;
    const images = assets.map( asset => asset.node.image );
    this.setState({
        images: images,
    });
  }
  logImageError(err){
    console.log(err)
  }
  componentDidMount(){
    const fetchParams ={
      first: 25,
    }
    CameraRoll.getPhotos(fetchParams, this.storeImages.bind(this), this.logImageError)
  }
  // setCameraVisible(visible) {
  //   // post.js에서 param이 넘어올 때, bind(this)에 담겨서 넘어온다.
  //   this.setState({CameraVisible: visible});
  // }
  //
  // onCamera() {
  //   return(
  //     <Modal
  //       animationType={"slide"}
  //       transparent={false}
  //       visible={this.state.CameraVisible}
  //       onRequestClose={() => {alert("Modal has been closed.")}}
  //       >
  //       <PostCamera
  //         {...this.props}
  //         setCameraVisible={this.setCameraVisible.bind(this)}/>
  //     </Modal>
  //   )
  // }
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          <TouchableOpacity
            style={[styles.image, styles.camera]}>
            <Icon name="ios-camera" size={45} color="#8899a5" />
          </TouchableOpacity>
          { this.state.images.map(image => <Image style={styles.image} source={{ uri: image.uri }} />) }
        </View>
      </ScrollView>
    )
  }
}

export default ImageList
