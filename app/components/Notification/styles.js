import { StyleSheet, PixelRatio, Platform } from 'react-native'
import Dimensions from 'Dimensions'

const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
  notiCont: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  image : {
    width: 34,
    height: 34,
    // borderWidth: 1,
    // borderColor: '#e9e9e9',
    borderRadius: 17
  },
  notiImg: {
    width: (width*0.15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  notiCtx: {
    width: (width*0.85),
    flexDirection: "column",
  },
  notiFrom: {
    fontWeight: '800',
  },
  notiText:{
    marginBottom: 2
  },
  notiTime:{
    fontWeight: '200',
    fontSize: 13,
    color: 'rgb(200, 199, 204)'
  }

})
