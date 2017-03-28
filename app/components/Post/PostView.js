import React , {Component} from 'react'
import { Text, View } from 'react-native'
import Post from './Post'

class PostView extends Component{
  constructor(props){
    super(props)
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  render(){
    return(
      <Post
          {...this.props}/>
    )
  }
}

export default PostView;


// <Modal
//   animationType={"slide"}
//   transparent={false}
//   visible={this.state.modalVisible}
  // style={styles.container}
//   >
//   <Text>Post</Text>
// </Modal>
