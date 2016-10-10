import { StyleSheet } from 'react-native';
import Util from '../../assets/utils'

export default StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:Util.size.height,
    width:Util.size.width,
  },
  input: {
    height: 50,
    marginRight: 25,
    marginLeft: 25,
    margin:10,
    padding: 10,
    fontSize: 18,
    borderRadius:5,
    backgroundColor: '#ffffff'
  },
  button: {
    height: 50,
    backgroundColor: '#5e5e5e',
    alignSelf: 'stretch',
    marginRight: 25,
    marginLeft: 25,
    margin:10,
    borderRadius:5,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  logo:{
    width:130,
    // justifyContent: 'center',
    // alignItems:'center',
  },
  findUserInfo: {
    margin: 10,
  },
  register:{
    width: Util.size.width,
    height: 40,
    backgroundColor: '#EE8B12',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position:"absolute",
    left:0,
  },
});
