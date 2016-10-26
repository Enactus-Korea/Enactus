import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  feedWrapper: {
    backgroundColor: '#ebebeb'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  notiWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  notiContent: {
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#e9e9e9'
  },
  notiText: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400'
  },
  flexRow: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  red: {
    color: 'red'
  },
  userImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 20
  },
  feedListView: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  feedContainer: {
    padding: 15,
    paddingBottom:0,
  },
  feedTopContainer: {
    flexDirection: 'row'
  },
  feedInfoContainer: {
    marginLeft: 10
  },
  feedUser: {
    fontWeight: '500'
  },
  feedUserUniv: {
    color: '#a7a7a7'
  },
  feedUserTime: {
    color: '#ccc'
  },
  ctxContainer: {
    marginTop: 15
  },
  likeAndComment: {
    height: 40,
    marginLeft: 15,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems:'center',
  },
  iconButton: {
    width:28,
    height:32,
    marginRight: 5,
  },
  shareButton:{
    right:30,
    bottom:2,
    position:'absolute',
  },
  textAlign: {
    textAlign: 'center',
    color: '#bfbfbf',
    fontWeight: '500',
    marginRight: 15,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  readMore: {
    color: '#d6d6d6'
  }
})
