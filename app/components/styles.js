import Util from '../assets/utils'
import { StyleSheet, PixelRatio } from 'react-native'

export default StyleSheet.create({
  container:{
    paddingTop:30,
    height:Util.size.height,
    width:Util.size.width,
    flexDirection: 'column',
    flex: 1,
  },
  icon:{
    width: 40,
    height: 40,
    borderRadius: 25
  },
  iconContainer:{
    backgroundColor: 'transparent',
    flexDirection:"row",
    margin:10,
    // justifyContent:"space-between",
  },
  InfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    marginHorizontal: 15,
  },
  User: {
    fontFamily: 'Avenir',
    fontSize: 15,
    flexWrap: 'wrap',
    fontWeight: '800'
  },
  UserUniv: {
    fontFamily: 'Avenir',
    fontSize: 11,
  },
  imageContainer: {
    flex: 1,
    width:Util.size.width,
    height: 339,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: Util.size.width/1.5,
    height: 339,

  },
  textArea:{
    height:335,
    padding:15,
    fontSize:20
  },
  funcContainer:{
   width:Util.size.width,
  //  height:275,
   position:"absolute",
   bottom:50,
   left:0,
   borderTopWidth:1,
   borderTopColor:"#a0adb7",
   backgroundColor: 'white'
 },
 funcIconCon:{
   height:50,
   alignItems:"center",
   justifyContent:"space-between",
   flexDirection:"row",
  //  borderBottomWidth:1,
  //  borderBottomColor:"#ccd6dd"
 },
 funcIcon:{
   width:210,
   flexDirection:"row",
   justifyContent:"space-around"
 },
 funcBtn:{
   width:110,
   flexDirection:"row",
   justifyContent:"space-around",
   alignItems:"center",
 },
 btn:{
   height:35,
   width:60,
   alignItems:"center",
   justifyContent:"center",
   borderRadius:6,
   borderColor:"#ccd6dd",
   borderWidth:1
 },
 activeBtn:{
   height:35,
   width:60,
   alignItems:"center",
   justifyContent:"center",
   borderRadius:6,
   backgroundColor:"#E8B11D"
 },
 btnText:{
   color:"#ccd6dd",
   fontSize:14
 },
 activeBtnText:{
   color:"#fff",
   fontSize:14
 },
 imageIcon:{
   width: Util.size.width/3,
   height:113,
   alignItems:"center",
   justifyContent:"center",
   borderRightColor:"#ddd",
   borderBottomColor:"#ddd",
   borderRightWidth:1,
   borderBottomWidth:1
 },
 //image
 avatarContainer:{
   borderColor: '#9B9B9B',
   marginLeft: 10,
   borderWidth: 1 / PixelRatio.get(),
   height: 150,
   width: 150
 },
});
