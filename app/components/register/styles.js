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
    padding: 3,
    fontSize: 12,
    borderRadius:5,
    backgroundColor: '#ffffff'
  },
  mobile: {
    marginLeft: 25,
    margin:10,
    width: 200,
    height: 30,
    // borderBottomWidth: 1,
    // borderBottomColor: '#5e5e5e',
  },
  button: {
    height: 30,
    width: 80,
    backgroundColor: '#5e5e5e',
    alignSelf: 'stretch',
    marginRight: 25,
    marginLeft: 25,
    margin:10,
    borderRadius:5,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 10,
    color: '#FFF',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  activeBtn:{
    height:35,
    width:60,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:6,
    backgroundColor:"#E8B11D"
  },
  activeBtnText:{
    color:"#fff",
    fontSize:14
  },
});
