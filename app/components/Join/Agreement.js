import React from 'react'
import {View, Text, Modal, ScrollView, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const Agreement = (props) => (
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={props.visible}
    >
    <View style={styles.agreement_cont}>
      <ScrollView style={styles.agreement_box}>
        <Text>
          {props.agreementType}은 궁시렁 궁시렁
        </Text>
      </ScrollView>
      <View style={{flexDirection:'row', alignItems: 'center', marginBottom: 5}}>
        <Text>
          {props.agreementType}에 동의합니다.
        </Text>
        <Ionicons
          name={props.checked ? "md-square" : "md-square-outline"}
          size={20}
          style={{marginLeft: 5, marginBottom: -2}}
          onPress={() => props.isGetPermission(props.checkedType, props.visibleType)}/>
      </View>
    </View>
  </Modal>
)

export default Agreement
