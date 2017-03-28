import React from 'react'
import { View, MapView, Text, StyleSheet, Platform } from 'react-native'

function regionFrom(lat, lon, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta)
    };
  }


const Contact = () => (
  <View>
    <MapView style={{height: 300, margin:10}}
        region={{
          latitude: 37.548273,
          longitude: 127.041858,
          latitudeDelta: 0.0432,
          longitudeDelta: 0.0412
        }}
        // annotations={[{
        //   atitude: 37.548273,
        //   longitude: 127.041858,
        //   title: '인액터스 코리아 본사'
        // }]}
      />
    <View style={{marginTop: 30}}>
      <View style={styles.infoBox}>
        <Text style={styles.headTxt}>주소</Text>
        <Text style={styles.infoTxt}>서울툭별시 성동구 성수동 668-100 3층</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.headTxt}>이메일</Text>
        <Text style={styles.infoTxt}>admin@enactuskorea.org</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.headTxt}>연락처</Text>
        <Text style={styles.infoTxt}>070-4274-8184</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  infoBox:{
    marginLeft: 15,
    marginBottom: 15
  },
  headTxt:{
    fontWeight: '700',
    marginBottom: 7,
  },
  infoTxt:{
    fontWeight: '300',
    fontSize: 16
  }
});

export default Contact;
