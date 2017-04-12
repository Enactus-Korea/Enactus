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
  sch_input:{
    flex: 1,
    width: Dimensions.get('window').width/1.05,
    backgroundColor: '#22242A',
    marginTop: Platform.OS === 'ios' ? 22 : 0,
    height: 26,
    borderRadius: 3,
    fontSize: 13,
    textAlign: 'center',
    color: '#fff'
  },
})
