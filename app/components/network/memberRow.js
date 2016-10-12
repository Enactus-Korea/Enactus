'use strict';

import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Image,ScrollView,ListView} from 'react-native';
import styles from './styles'

class MemberRow extends Component{

  render(user) {
    return (
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <View style={{flex: 0, justifyContent: 'flex-end'}}>
                <Image source={require('../../assets/user.png')} style={styles.userImage}/>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.userName} numberOfLines={1} >{this.props.userName}</Text>
                <Text style={styles.userUniv} numberOfLines={1} >{this.props.userUniv}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
};

export default MemberRow
