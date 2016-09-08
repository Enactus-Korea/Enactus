import { StyleSheet } from 'react-native';
import Util from './utils'

export default StyleSheet.create({
  feedContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    borderRadius: 5
  },
  feedTopContainer: {
    margin:10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  feedInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 1,
    marginHorizontal: 15,
  },
  ctxContainer:{
    margin:10,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
  feedUserContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: -4
  },
  feedUser: {
    fontFamily: 'Avenir',
    fontSize: 15,
    flexWrap: 'wrap',
    fontWeight: '800'
  },
  feedUserUniv: {
    fontFamily: 'Avenir',
    fontSize: 11,
  },
  feedUserTime: {
    fontFamily: 'Avenir',
    fontSize: 11,
    marginTop: 8
  },
  txtContents:{
    marginBottom: 10,
    paddingBottom: 3,
  },
  imageContents:{
    backgroundColor: 'transparent',
    width:200,
    height:200,
    alignSelf: 'center',
  },
  feedsListView: {
    paddingVertical: 10,
		width: Util.size.width,
  },
  likeAndcomment: {
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    borderTopWidth:1,
    borderTopColor:"#5e5e5e",
    paddingVertical: 10,
    marginHorizontal: 10
  },
  funcIcon:{
    marginLeft: 10,
    width:120,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  funcShare:{
    width:50,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
		},
	image: {
		marginTop: 30,
		flex: 1,
		width: 400,
	},
	slideText: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	}
});
