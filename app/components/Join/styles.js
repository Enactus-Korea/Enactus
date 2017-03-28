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
    backgroundColor: 'rgba(0,0,0,0.5)',
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

    // opacity: 0.8
  },
  home_btn_Text:{
    margin: 5,
    color: 'white',
  },
  input: {
    height: 50,
    marginRight: 25,
    marginLeft: 25,
    margin:5,
    padding: 10,
    fontSize: 18,
    borderRadius:3,
    backgroundColor: '#ffffff'
  },
  button: {
    height: 50,
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
    fontSize:15,
    letterSpacing: 10,
    // color: 'white',
    // fontWeight: '700'
  },
  login_head:{
    // alignItems: 'center',
    justifyContent:'center',
    height:Dimensions.get('window').height/3.5,
    // borderWidth: 1,
    // borderColor: 'white',
    // borderStyle: 'solid'
  },
  login_body:{
    height:Dimensions.get('window').height/1.9,
    // borderWidth: 1,
    // borderColor: 'white',
    // borderStyle: 'solid'
  },
  login_btm:{
    height:Dimensions.get('window').height/12,
    // borderWidth: 1,
    // borderColor: 'white',
    // borderStyle: 'solid'
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
    // borderWidth: 1,
    // borderColor: 'white',
    // borderStyle: 'solid'
  },
});
