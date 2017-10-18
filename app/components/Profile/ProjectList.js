import React, {PureComponent} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'


class ProjectList extends PureComponent {
  render() {
    let { navigation, project } = this.props;
    return (
      <TouchableOpacity
        style={styles.proj_box}
        onPress={() => navigation.navigate('Project_Detail', {...project})}>
        <Text style={styles.proj_box_text}>{project.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default ProjectList
