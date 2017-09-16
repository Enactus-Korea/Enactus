import React, {PureComponent} from 'react'
import { View, Text, StyleSheet, Platform, Linking, TouchableOpacity, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

let { width, height } = Dimensions.get('window')


class Contact extends PureComponent {
  handleLink = (url) => {
    Linking.canOpenURL(url)
      .then( supported => {
        if(supported) {
          Linking.openURL(url)
        } else {
          console.log('Don\'t know how to open URI: ' + url);
        }
      })
  }
  render(){
    return(
      <View>
        <MapView
            style={styles.map}
            region={{
              latitude: 37.5475496,
              longitude: 127.04272659999992,
              latitudeDelta: 0.00502,
              longitudeDelta: 0.00435
              // 1latitudeDelta = 110.54KM
              // 1longitudeDelta = 111.32KM
            }}
          >
            <MapView.Marker
              coordinate={{latitude: 37.5475496, longitude: 127.04272659999992}}
              title='인액터스 코리아'
              // image={require('enactuskoreaLogo')} => 이미지 넣는 것
              // description="서울특별시 성동구 성수동 668-100 3층"
             />
          </MapView>
        <View style={{marginTop: 15}}>
          <View style={styles.infoBox}>
            <Text style={styles.headTxt}>주소</Text>
            <Text style={styles.infoTxt}>서울특별시 성동구 성수동 668-100 3층</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.headTxt}>이메일</Text>
            <Text style={styles.infoTxt}>admin@enactuskorea.org</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.headTxt}>연락처</Text>
            <TouchableOpacity onPress={() => this.handleLink('tel:07042748184')}>
            <Text style={styles.infoTxt}>070-4274-8184</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  infoBox:{
    width: width,
    paddingHorizontal: 15,
    marginBottom: 15
  },
  headTxt:{
    fontWeight: '700',
    marginBottom: 7,
  },
  infoTxt:{
    fontWeight: '300',
    fontSize: 16
  },
  map: {
    width: width,
    height: height/2
  }
});

export default Contact;
