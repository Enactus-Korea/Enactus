import { StyleSheet,Navigator } from 'react-native';
import Util from '../../assets/utils'

export default StyleSheet.create({
  topBlock: {
  backgroundColor: '#5e5e5e',
  // height: Navigator.Height,
  paddingTop: 12,
  paddingBottom: 10,
  paddingRight:10,
  paddingLeft:10,
},
  searchIcon: {
  paddingRight: 10,
},
  searchBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
  searchBarInput: {
    flex: 4,
    flexDirection: 'column',
    height: 28,
    backgroundColor: '#202020',
    borderRadius: 3,
    color: 'white',
    paddingLeft: 10,
},
  cancelButtonText: {
  paddingLeft: 10,
  fontSize: 14,
  color: 'white',
},

})
