import { StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

export default StyleSheet.create({
  feedPage:{
    marginBottom: 48,
    backgroundColor: '#F1F3F5',
  },
  feedWrapper: {
    flex: 1,
    backgroundColor: '#F1F3F5',
    flexDirection: 'column',
    justifyContent: 'space-between'
    // marginBottom: 50,
  },
  feedRendering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedRenderingText: {
    fontSize: 15,
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
    width: 34,
    height: 34,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 17
  },
  feedListView: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  feedContainer: {
    padding: 15,
    paddingBottom:0,
  },
  feedTopContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  feedInfoContainer: {
    marginLeft: 10
  },
  feedUser: {
    fontWeight: '500',
    marginBottom: 5
  },
  feedUserUniv: {
    color: '#a7a7a7',
    fontWeight: '100',
    fontSize: 13,
  },
  feedUserTime: {
    color: '#ccc',
    fontWeight: '200',
    fontSize: 13,
  },
  feedTopRight: {
    flexDirection: 'row',
    alignItems:'center',
  },
  ctxContainer: {
    marginTop: 15
  },
  likeAndComment: {
    height: 40,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems:'center',
  },
  feedBtmIcon: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems:'center',
  },
  iconButton: {
    color: '#e9e9e9',
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
    color: '#d6d6d6',
    fontWeight: "500"
  },
  postedImg:{
    // flex: 1,
    width: Dimensions.get('window').width/1.1,
    height: Dimensions.get('window').width/1.1,
    resizeMode: 'contain',
    marginTop: 15
  },
  detail_view:{
    flex: 1,
    justifyContent: 'space-between',
  },
  comment_input_cont:{
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    borderTopColor: '#dbdbdb',
    borderTopWidth: 1,
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 1

  },
  comment_btn:{
    fontWeight: '600'
  },
  comment_input:{
    fontSize: 15,
    alignItems:'center',
    width: Dimensions.get('window').width/1.2,
    height: 48,
  },
  comment_box:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  separator: {
    height: 5,
    backgroundColor: '#F1F3F5',
  },
  time_text:{
    fontWeight: '100',
    fontSize:10,
  },
})
