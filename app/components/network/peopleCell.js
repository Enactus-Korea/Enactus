'use strict';

import React, { Component } from 'react';
import {Text,StyleSheet,PixelRatio,View,TouchableHighlight,Image,ScrollView,ListView} from 'react-native';


class PeopleCell extends Component{

  render(user) {
    return (
      <View>
        <TouchableHighlight>
          <View style={styles.row}>
              <View style={{flex: 1}}>
                <Text style={styles.beerName} >{this.props.user.userName}</Text>
              </View>
            </View>
        </TouchableHighlight>
        <View style={styles.cellBorder} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  beerName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  beerStyle: {
    color: '#999999',
    fontSize: 12,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 93,
    marginRight: 10,
    width: 60,
  },
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },
});

export default PeopleCell
