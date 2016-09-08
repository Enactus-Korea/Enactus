import { View, Text } from 'react-native';
import React, { Component, PropTypes } from 'react'
import { Global } from './components'
import Drawer from 'react-native-drawer'
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
  render(){
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <Control closeDrawer={this.closeDrawer} />
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.2}
        panOpenMask={0.2}
        negotiatePan
        >
        <Global />
        </Drawer>
    )

  }
}

export default Root
