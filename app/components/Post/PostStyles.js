// import Util from '../../assets/utils'
import { StyleSheet, PixelRatio } from 'react-native'
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  container:{
    height: Dimensions.get('window').height-105, //TODO: tab이 변함에 따라서 높이 조정
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    justifyContent:"space-between",
    // paddingTop: 64
  },
  post_top:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#30333C',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  PostContainer:{
    width: Dimensions.get('window').width,
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
  titleText:{
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#fff',
  },
  TextBold:{
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    color: '#E8B11D'
  },
  NonTextBold:{
    fontSize: 16,
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    color: '#DBDBDB'
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
    alignItems:'center',
    // justifyContent:"space-between",
  },
  InfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    marginHorizontal: 10,
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
    // width:Util.size.width,
    height: 339,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    // width: Util.size.width/1.5,
    height: 339,

  },
  textArea:{
    height:200,
    padding:15,
    fontSize:20
  },
 //image
 buttonContainer:{
   flexDirection: 'row',
   borderColor: '#9B9B9B',
  //  borderTopWidth: 1 / PixelRatio.get(),
   height: 50,
   bottom:-50,
   position: 'relative',
   width: Dimensions.get('window').width,

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
 button: {
   borderColor:'#5e5e5e',
   borderWidth: 0.5,
   borderRadius: 2,
   paddingVertical: 6,
   paddingHorizontal: 15
 },
 buttonText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#5e5e5e'
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.2)',
    // backgroundColor: 'transparent'
 },
  modalBtn:{
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('window').width/1.1,
    height: Dimensions.get('window').height/15,
    alignItems:'center',
    marginBottom: 10,
   justifyContent:'center',
  }
});
