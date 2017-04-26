import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  drawer_Cont:{
    flex: 1,
    backgroundColor: '#F1F3F5',
    justifyContent: 'space-between'
  },
  drawer_Header:{
    height: Platform.OS === 'ios'? 64 : 54,
    paddingTop: 10,
    backgroundColor: '#30333C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer_Header_Font:{
    color:'white',
    fontSize: 18,
    fontWeight: "900",
  },
  drawer_Menu:{
    flex: 8,
    marginTop: 10
  },
  drawer_Lists:{
    height: 50,
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 0.8,
  },
  drawer_User:{
    marginTop:15,
    backgroundColor: 'white',
    height: 100,
    paddingTop:25,
    paddingBottom:25,
    paddingLeft:15,
    borderWidth: 0.5,
    flexDirection: 'row',
    borderColor: '#D9D9D9',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  logo_image: {
    height: 50,
    width:150,
    resizeMode:'contain',
    // ["contain","cover","stretch","center","repeat"]
  },
  social_media:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    height: 100,
    flex: 2.5,
  },
  social_media_text:{
    fontSize: 13,
    color: '#ADB5BD'
  },
  social_media_icons:{
    flexDirection: 'row',
    // alignItems:'center',
  },
  social_media_icon:{
    color: '#ADB5BD',
    marginRight: 5
  }
});
