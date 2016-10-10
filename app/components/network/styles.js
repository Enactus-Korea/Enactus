import { StyleSheet } from 'react-native';
import Util from '../../assets/utils'

export default StyleSheet.create({
	container:{

  },
  list:{
    height:55,
    paddingLeft:20,
		flexDirection: 'row',
    borderBottomColor:"#aaa",
    borderBottomWidth: Util.pixel,
		alignItems: 'center',
		justifyContent: 'space-between',
  },
	userImage: {
		width: 42,
		height: 42,
		borderRadius: 21,
	},
	userList: {
		justifyContent:"center",
		flex: 2,
		marginLeft: 20,
	},
	activeBtn:{
    height:27,
    width:70,
		right: 30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:3,
    backgroundColor:"#E8B11D"
  },
	activeBtnText:{
    color:"#fff",
    fontSize:10
  },
});
