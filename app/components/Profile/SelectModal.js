import React, { Component } from 'react'
import { Modal, View, TouchableOpacity, Text, Picker, Alert} from 'react-native'
import styles from './styles'




class SelectModal extends Component {
  render(){
    let { selectItems, subject, isVisible, selectedValue, handleModal } = this.props,
        Items = selectItems.map((l, i) => <Picker.Item key={i} value={l} label={l} />);
    if(selectItems.length < 0){
      Alert.alert( subject ,[{'text':'확인', onPress: () => console.log("AAAA")}])
    }
    console.log("SelectModal",this.props );
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isVisible}
        >
        <View style={styles.selectOptions}>
          <TouchableOpacity
            style={styles.selectOptionsTop}
            onPress={handleModal}>
            <Text style={styles.selectOptionsTopText}>완료</Text>
          </TouchableOpacity>
          <View style={styles.selectOptionsTable}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(val) => console.log("CCCC", val)}
              >
              {Items}
            </Picker>
          </View>
         </View>
      </Modal>
    )
  }
}

export default SelectModal
