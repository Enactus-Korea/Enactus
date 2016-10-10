import { StyleSheet,PixelRatio } from 'react-native';
import Util from '../../assets/utils'

export default StyleSheet.create({
	container:{

  },
	textContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	row: {
		alignItems: 'center',
		backgroundColor: 'white',
		flexDirection: 'row',
		padding: 5,
	},
	cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1,
    marginLeft: 4,
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
	userName:{
		flex: 1,
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 2,
	},
	userUniv:{
		color: '#999999',
    fontSize: 12,
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
