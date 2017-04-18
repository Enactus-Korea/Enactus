import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const ProjectDetail = (props) => {
  console.log("ProjectDetail", props)
  let {detail} = props.navigation.state.params;
  return(
    <View style={styles.detail_pro}>
      <View style={styles.detail_pro_top}>
        <View style={styles.detail_pro_title}>
          <Text style={styles.detail_pro_univ}>{detail.univ} 프로젝트</Text>
          <Text style={styles.detail_pro_name}>{detail.name}</Text>
        </View>
        {/* <Text>created {detail.created}</Text> */}

        <Text>"{detail.abbr_desc}"</Text>

        <View style={{flexDirection: 'row'}}>
          {detail.portionOf.map((n, i) => <TouchableOpacity key={i} style={styles.detail_proj_part}><Text># {n}</Text></TouchableOpacity>)}
        </View>

      </View>
      <View style={styles.detail_pro_btm}>
        <Text>{detail.detail_desc}</Text>
      </View>
    </View>
)}

export default ProjectDetail
