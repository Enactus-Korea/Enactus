import { StyleSheet } from 'react-native';
import Util from '../../Assets/utils'

export default StyleSheet.create({
  sideMenuContainer:{
    flex: 1,
    backgroundColor:"#fff",
  },
  close: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageCon: {
    width: 0.7*Util.size.width/1.754,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60
  },
  logoimage:{
    width:65,
    height:30
  },
  control: {
    backgroundColor: '#5e5e5e',
    height:0.7*Util.size.width/4.1,
    justifyContent:"space-between",
    paddingTop:20,
	  paddingLeft:15,
	  paddingRight:15,
	  flexDirection:"row",
  },
  btn:{
    flexDirection:"row",
    alignItems:"center",
    paddingTop:13,
    paddingBottom:13,
    backgroundColor:"#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2"
  },
  btnIcon:{
    flex:1,
    textAlign:"center",
    color:"#555"
  },
  btnText:{
    flex:3,
    fontSize:14,
    fontWeight:"500",
    paddingLeft:20,
    color:"#454545"
  },
  btnContainer:{
    paddingTop:10,
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#bbb"
  },
  channelCon:{
    paddingTop: 50,
    flexDirection:"column",

  },
  snsText: {
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  snsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft: 50,
    paddingRight: 50
  },
  snsIcon: {
    width: 40,
    height: 40
  },

});
