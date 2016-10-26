import Util from '../../assets/utils'
import { StyleSheet, PixelRatio } from 'react-native'

export default StyleSheet.create({
  container:{
    height:Util.size.height,
    width:Util.size.width,
    flexDirection: 'column',
    // justifyContent:"space-between",
  },
  PostContainer:{
    width:Util.size.width,
    paddingTop: 23,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection:'row',
    backgroundColor: '#5e5e5e',
    justifyContent:"space-between",
  },
  Text:{
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
  },
  TextBold:{
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    color: '#E8B11D'
  },
  icon:{
    width: 40,
    height: 40,
    borderRadius: 20
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
 //image
 buttonContainer:{
   flexDirection: 'row',
   borderColor: '#9B9B9B',
   borderTopWidth: 1 / PixelRatio.get(),
   height: 50,
   bottom:0,
   position: 'absolute',
   width: Util.size.width,

 },
 iconButton:{
   justifyContent:'center',
   alignItems:'center',
   paddingHorizontal:10,
 },
 //Camera class
 cameraContainer: {
   flex: 1,
 },
 preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 overlay: {
   position: 'absolute',
   padding: 16,
   right: 0,
   left: 0,
   alignItems: 'center',
 },
 topOverlay: {
   top: 0,
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
 },
 bottomOverlay: {
   bottom: 0,
   backgroundColor: 'rgba(0,0,0,0.4)',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
 },
 captureButton: {
   padding: 15,
   backgroundColor: 'white',
   borderRadius: 40,
 },
 typeButton: {
   padding: 5,
 },
 flashButton: {
   padding: 5,
 },
 buttonsSpace: {
   width: 10,
 },
});
