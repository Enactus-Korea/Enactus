import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  container: {
    height:Dimensions.get('window').height,
    justifyContent:'space-between',
    backgroundColor: '#fff',
  },
  comment:{
    position:"absolute",
    bottom:50,
    left:0,
    height:60,
    width:Dimensions.get('window').width,
    borderTopWidth:1,
    borderColor:'#f3f3f3',
    backgroundColor:'#fff',
    flexDirection:'row'
  },
  commentBox:{
    width:Dimensions.get('window').width/1.3,
    padding: 5,
    borderTopWidth:1,
    borderColor:'#f3f3f3',
  },
  activeBtn:{
    marginVertical:5,
    height:40,
    width:Dimensions.get('window').width/5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    backgroundColor:"#E8B11D"
  },
  activeBtnText:{
    color:"#fff",
    fontSize:12
  },
})
