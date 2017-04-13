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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
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
  },
  projct_row:{
    flexDirection: 'row',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 1,
    alignItems: 'center',
    // justifyContent: "space-between",
  },
  projct_exit:{
    flexDirection: 'column',
    height: 50,
    paddingTop: 3,
    paddingBottom:10,
    paddingLeft: 10,
    paddingRight:10,
    backgroundColor: '#fff',
  },
  projct_exit_row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  projct_row_title:{
    marginRight: 10,
    width: Dimensions.get('window').width/4
  },
  projct_row_time:{
    width: Dimensions.get('window').width/3.5,
  },
  proj_box:{
    padding: 10,
    borderWidth: 1,
    borderColor:'#dbdbdb',
    borderRadius:3,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  pic_cont: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  pic_table:{
    marginTop: 22,
    height: 200,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff'
  },
  pic_table_top:{
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  detail_pro:{
    flexDirection: 'column'
  },
  detail_pro_top:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: Dimensions.get('window').height/2.1
  },
  detail_pro_btm:{
    padding: 15
  },
  detail_pro_title:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 15
  },
  detail_pro_univ:{
    fontSize: 12,
  },
  detail_pro_name:{
    fontSize: 30,
  },
  detail_proj_part:{
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor:'#dbdbdb',
    borderRadius:10,
    backgroundColor: '#fff',
    margin: 7
  }
})
