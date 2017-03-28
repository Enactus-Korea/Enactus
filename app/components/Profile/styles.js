import {StyleSheet, Platform} from 'react-native';
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  profile_top:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    height: Dimensions.get('window').height/2.5,
  },
  profile_img:{
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 0.5,
    borderColor: '#5e5e5e',
    marginBottom: 10,
  },
  profile_name:{
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 5,
  },
  profile_univ:{
    fontWeight: '200',
    color: '#5e5e5e',
    fontSize:13,
    marginBottom:15,
  },
  profile_selfIntro:{
    fontSize:13,
    fontWeight: '200',
  },
  profile_btm:{
    borderTopWidth:1,
    borderColor: '#dbdbdb',
    height: Dimensions.get('window').height/2.5,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  setting_list:{
    height: 50,
    borderBottomWidth:1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  setting_txt:{
    fontSize: 13,
  },
  setting_selfInt:{
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:'#dbdbdb',
    padding: 10,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  setting_proj:{
    borderWidth: 1,
    borderColor:'#dbdbdb',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  setting_detail:{
    marginTop:20,
    marginBottom:20,
    marginLeft:10,
    fontWeight: '400',
  },
  setting_input:{
    width: Dimensions.get('window').width,
    height: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:'#dbdbdb',
    padding: 5,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.9,
 },
})
