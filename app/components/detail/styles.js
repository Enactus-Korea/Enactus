import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height-100,
  },
  comment:{
    width:Dimensions.get('window').width,
    borderTopWidth:1,
    borderColor:'#f3f3f3',
    flexDirection: 'row',
  },
  commentBox:{
    width:Dimensions.get('window').width/1.3,
    padding:5,
    borderTopWidth:1,
    borderColor:'#f3f3f3',
    fontSize:12,
  },
  activeBtn:{
    marginVertical:5,
    height:26,
    width:Dimensions.get('window').width/6,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:3,
    backgroundColor:"#E8B11D"
  },
  activeBtnText:{
    color:"#fff",
    fontSize:12
  },
  feedTopContainer: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth:1,
    borderColor:'#f3f3f3',
  },
  userImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 20
  },
  feedInfoContainer: {
    marginLeft: 10
  },
  feedUser: {
    fontWeight: '500',
    marginRight: 5,
  },
  feedUserUniv: {
    color: 'gray'
  },
})
