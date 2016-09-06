import React, { PropTypes } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { Feeds } from './components'


const Feed = () => {
  return (
    <View style={styles.container}>
      <Feeds />
    </View>
  )
}

Feed.displayName = 'Feed'
