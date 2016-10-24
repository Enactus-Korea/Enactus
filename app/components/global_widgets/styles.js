import Util from '../../assets/utils'
import { StyleSheet, Navigator } from 'react-native'

export default StyleSheet.create({
  navContainer:{
    paddingTop: 23,
    paddingBottom: 10,
    // height: Navigator.Height,
    flexDirection:'row',
    backgroundColor: '#5e5e5e',
    justifyContent:"space-between",
  },
  LeftComp:{
    width: Util.size.width/5,
    left:10,
  },
  TitleComp:{
    width: Util.size.width/2,
    bottom: -5,
    textAlign: 'center',
    fontWeight:'600',
    color:'#fff',
    fontSize:16
  },
  RightComp:{
    width: Util.size.width/5,
    flexDirection: 'row',
  },
})
