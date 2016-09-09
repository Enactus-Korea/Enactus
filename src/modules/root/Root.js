import { View, Text } from 'react-native';
import React, { Component, PropTypes } from 'react'
import { Global } from './components'
import { connect } from 'react-redux'
import * as actions from './actions'
import Drawer from 'react-native-drawer'
// import Panel from '../panel/Panel'
import Control from './components/Control'
class Root extends Component {
  state={
		drawerOpen: false,
		drawerDisabled: false,
	};
	closeDrawer = () => {
		this._drawer.close()
	};
	openDrawer = () => {
		this._drawer.open()
	};
  // _changePanel (i) {
  //   const { change } = this.props
  //   change(i)
  // }
  // _renderPanelContent(key){
  //   switch (key) {
  //     //  case 'news':    return <Feed />
  //      case 'intro':   return <Intro />
  //      case 'network': return <Network />
  //     //  case 'unknown': return <Unknown />
  //     //  case 'archive': return <Archive />
  //     //  case 'config':  return <Config />
  //     //  case 'login':   return <Login />
  //    }
  // }
  render(){
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <Control closeDrawer={this.closeDrawer}
          /> }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => { this.setState({drawerOpen: true}) }}
        onClose={() => { this.setState({drawerOpen: false}) }}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.2}
        negotiatePan
        >
        <Global />
      </Drawer>
    )
  }
}
// panOpenMask={0.2} => 추가하면 손으로 열기 가능..ㅎㅎㅎ
// export default Root

Root.displayName = 'Root'
Root.propTypes = {
  change: PropTypes.func.isRequired,
}
export default connect(
  (state) => ({
    panels: state.root
  }),
  (dispatch) => ({
    change: (index) => dispatch(actions.change(index))
  })
)(Root)
