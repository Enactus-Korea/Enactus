import { StyleSheet, PixelRatio, Platform } from 'react-native'
import Dimensions from 'Dimensions'

const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
  notiCont: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image : {
    width: 34,
    height: 34,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 17
  },
  notiImg: {
    width: (width*0.2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  notiCtx: {
    width: (width*0.8),
    flexDirection: "column",
  }

})
