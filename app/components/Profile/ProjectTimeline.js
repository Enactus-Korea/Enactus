import React from 'react'
import {View, Dimensions } from 'react-native'
import styles from './styles'


const ProjectTimeline = ({
  lineColor,
  lineHeight
}) => {
  let timelineStyle = {
    height: Dimensions.get('window').height/2.5/lineHeight,
    backgroundColor: lineColor ? "blue" : "gray"
  }
  return <View style={[styles.timeline, timelineStyle]} />
}
//
// class ProjectTimeline extends Component {
//   // constructor(props){
//   //
//   // }
//   render(){
//     let timelineStyle = {
//       height: Dimensions.get('window').height/2.5/this.props.lineHeight,
//       backgroundColor: this.props.lineColor ? "blue" : "gray"
//     }
//     return <View style={[styles.timeline, timelineStyle]} />
//   }
// }




export default ProjectTimeline
