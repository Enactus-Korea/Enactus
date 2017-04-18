import React , {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from './actions'
import { Text, View, Alert } from 'react-native'
import Post from './PostCont'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class PostView extends Component{
  render(){
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
