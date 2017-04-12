import {StyleSheet, Platform} from 'react-native';
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  row_cont:{
    width: Dimensions.get('window').width,
    height: 60,
    backgroundColor: '#fff',
    marginBottom: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profile_img:{
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#5e5e5e',
    marginRight: 10,
  },
  profile_ctx:{
    flexDirection: 'column',
  },
  profile_name:{
    fontWeight: '600',
    marginBottom: 1,
  },
  detail_name:{
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 5,
  },
  detail_univ:{
    fontWeight: '200',
    color: '#5e5e5e',
    fontSize:13,
    marginBottom:15,
  },
  detail_selfIntro:{
    fontSize:13,
    fontWeight: '200',
  },
  detail_img:{
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 0.5,
    borderColor: '#5e5e5e',
    marginBottom: 10,
  },
  detail_top:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    height: Dimensions.get('window').height/2.5,
  },
})
