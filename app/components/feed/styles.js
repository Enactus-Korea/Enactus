import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  feedWrapper: {
    backgroundColor: '#f2f2f2'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  notiWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#f2f2f2'
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
    height: 185,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    backgroundColor: '#fff',
  },
  feedContainer: {
    padding: 15
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
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
    backgroundColor: '#fcfcfc'
  },
  likeAndCommentBox: {
    width: Dimensions.get('window').width/3,
    padding: 15,
    borderRightWidth: 1,
    borderColor: '#e9e9e9'
  },
  shareText: {
    width: Dimensions.get('window').width/3,
    padding: 15,
  },
  textAlign: {
    textAlign: 'center',
    color: '#bfbfbf',
    fontWeight: '500'
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  readMore: {
    color: '#d6d6d6'
  }
})
