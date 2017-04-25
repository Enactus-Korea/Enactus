import { StyleSheet, PixelRatio, Platform } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  sch_top:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#30333C',
    // paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  sch_input_bar:{
    // flex: 1,
    width: Dimensions.get('window').width,
    height: 64,
    backgroundColor: '#30333C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10
  },
  sch_input:{
    // flex: 1,
    // width: Dimensions.get('window').width/1.05,
    backgroundColor: '#22242A',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    height: 29,
    borderRadius: 3,
    fontSize: 13,
    textAlign: 'center',
    color: '#fff',
  },
  sch_animate:{
    // width: Dimensions.get('window').width/1.05,
    backgroundColor: '#22242A',
    height: 26,
  },
  sectionHeader:{
    height: 60,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  sectionHeaderText:{
    fontWeight: '500',
    color: '#8F969E',
    fontSize: 14,
  }
})
