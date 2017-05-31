import React , {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from './actions'
import { Text, Modal, Alert, TouchableOpacity } from 'react-native'
import Post from './PostCont'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { addNavigationHelpers } from 'react-navigation'
import Reactotron from 'reactotron-react-native'

class PostView extends Component{
  state = {
    visible: this.props.visible
  }
  render(){
    // Reactotron.log(this.props.navigationState)
    // Reactotron.log(this.props.navigation.dispatch)
    // Reactotron.log(this.props)
    const { user, navigation: {dispatch} ,navigationState, isPostToBamboo, onPostPressed } = this.props;
    return(
      <Modal
        animationType={"slide"}
        visible={this.state.visible}>
        <Post
          navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })}
          // {...this.props}
          user={user}
          isPostToBamboo={isPostToBamboo}
          onPostPressed={onPostPressed}

        />
      </Modal>
    )
  }
}


function mapStateToProps(state){
  return {
    user: state.permissions.user,
    navigationState: state.feedNav
  }
}

export default connect(mapStateToProps,actions)(PostView)
