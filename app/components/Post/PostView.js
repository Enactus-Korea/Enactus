import React , {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from './actions'
import { Text, Modal, Alert, TouchableOpacity } from 'react-native'
import Post from './PostCont'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class PostView extends Component{
  state = {
    visible: this.props.visible
  }
  render(){
    return(
      <Modal
        animationType={"slide"}
        visible={this.state.visible}>
        <Post {...this.props}/>
      </Modal>
    )
  }
}


function mapStateToProps(state){
  return {
    user: state.permissions.user
  }
}

export default connect(mapStateToProps,actions)(PostView)
