import Util from '../../assets/utils'
import { StyleSheet, Navigator } from 'react-native'

export default StyleSheet.create({
  navContainer:{
    paddingTop: 22,
    paddingBottom: 12,
    height:64,
    // height: Navigator.Height,
    flexDirection:'row',
    backgroundColor: '#5e5e5e',
    justifyContent:"space-between",
    alignItems: 'center'
  },
  LeftComp:{
    width: Util.size.width/5,
    left:10,
  },
  TitleComp:{
    textAlign: 'center',
    fontWeight:'bold',
    color:'#fff',
    fontSize:16
  },
  RightComp:{
    width: Util.size.width/5,
    flexDirection: 'row',
  },
})
