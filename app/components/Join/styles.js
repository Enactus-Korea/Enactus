import {StyleSheet, Platform} from 'react-native';
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  imageBack:{
    width: Dimensions.get('window').width,
    flex:1,
    resizeMode: 'cover',
  },
  logo:{
    height: Dimensions.get('window').height/10,
    margin: 5,
    // resizeMode: 'cover',
  },
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-between'
  },
  login_title:{
    fontWeight: '700',
    fontSize: 40,
    color: 'white',
    fontFamily:'AvenirNextCondensed-UltraLight',
    fontWeight: "600"
    // letterSpacing 간격 넓히는 것
  },
  home_btn:{
    justifyContent: 'center',
    alignItems:'center'
  },
  home_btn_Text:{
    margin: 5,
    color: 'white',
  },
  input: {
    height: 50,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#ffffff',
    marginBottom: 0.5,
    // borderTopWidth: 1,
    // borderBottomWidth: 0.5,
    // borderColor:'#d8d8d8',
  },
  type_input:{
    marginTop: 9,
    height: 50,
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor:'#d8d8d8',
  },
  button: {
    height: 40,
    backgroundColor: '#FEC13A',
    marginRight: 25,
    marginLeft: 25,
    margin:10,
    borderRadius:3,
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC13A',
  },
  buttonText:{
    fontSize:10,
  },
  login_head:{
    justifyContent:'center',
    height:Dimensions.get('window').height/3.5,
  },
  login_body:{
    height:Dimensions.get('window').height/1.9,
  },
  login_btm:{
    height:Dimensions.get('window').height/12,
  },
  cen_column: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  bottom_btn:{
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#FEC13A',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 0,
    position:"absolute",
    left:0,
    flexDirection: 'row',
  },
  rgst_body:{
    justifyContent:'center',
    height:Dimensions.get('window').height/1.13,
    width:Dimensions.get('window').width,
  },
  rgst_email:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    width:Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor:'#d8d8d8',
    // borderWidth:1,
    // borderColor: 'black',
  },
  email_input:{
    height: 50,
    fontSize: 14,
    width:Dimensions.get('window').width/1.4,
    // borderWidth:1,
    // borderColor: 'black',
  },
  email_button:{
    backgroundColor: '#FEC13A',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
    // borderColor: 'black',
  },
  type_inputText:{
    fontSize: 14,
    color: '#dbdbdb',
  },
});
