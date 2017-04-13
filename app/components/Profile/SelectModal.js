import React from 'react'
import { Modal, View, TouchableOpacity, Text, Picker, Alert} from 'react-native'
import styles from './styles'


const SelectModal = (props) => {
  let Items = props.selectItems.map((l, i) => <Picker.Item key={i} value={l} label={l} />);
  if(props.selectItems.length < 0){
    Alert.alert('프로젝트를 선택해주세요.',[{'text':'확인', onPress: () => props.handleCloseModal(props.typeOf)}])
  }
  return(
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={props.isVisible}
      >
      <View style={styles.pic_cont}>
        <View style={styles.pic_table}>
          <TouchableOpacity
            style={styles.pic_table_top}
            onPress={() => props.handleCloseModal(props.typeOf)}>
            <Text style={{marginRight: 15}}>완료</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={props.selectedValue}
            onValueChange={(val) => props.handleValueChange(props.targetValue, val)}
            itemStyle={{height: 170}}
            >
            {Items}
          </Picker>
        </View>
       </View>
    </Modal>
  )
}

export default SelectModal
