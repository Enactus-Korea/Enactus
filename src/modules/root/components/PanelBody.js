import React, { Component, PropTypes} from 'react'
import {View, Image, TouchableHighlight,Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'

class PanelBody extends Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  // onRoute(){
  //     this.props.panels.panels.navigator.replace({id:this.props.panels.panels.route})
  // }
  render(){
    debugger
    const panels = this.props.panels.panels.map((panel, i) => {

      return(

        <TouchableHighlight underlayColor="#888"
          onPress={() => {

            this.props.closeDrawer()
            // this.onRoute()
          }}
          key={ panel.key }>
          <View style={styles.btn}>
            <Icon style={styles.btnIcon} name={panel.name} size={20}></Icon>
            <Text style={styles.btnText}>{ panel.title }</Text>
          </View>
        </TouchableHighlight>
      )
    })
    return(
      <View>
        {panels}
      </View>
    )
  }
}

export default PanelBody
