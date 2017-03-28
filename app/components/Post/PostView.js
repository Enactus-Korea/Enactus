import React , {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from './actions'
import { Text, View } from 'react-native'
import Post from './Post'

class PostView extends Component{
  render(){
    console.log("post", this.props)
    return(
      <View>
        <Post {...this.props}/>
      </View>
    )
  }
}


function mapStateToProps(state){
  return {
    user: state.permissions.user
  }
}

export default connect(mapStateToProps,actions)(PostView)

// export default PostView;


// <Modal
//   animationType={"slide"}
//   transparent={false}
//   visible={this.state.modalVisible}
  // style={styles.container}
//   >
//   <Text>Post</Text>
// </Modal>
