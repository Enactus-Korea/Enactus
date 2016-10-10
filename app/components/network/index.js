'use strict';
import React, { Component } from 'react';
import {Text,View,TouchableHighlight,Image,ScrollView} from 'react-native';
// import SearchBar from 'react-native-search-bar';
// import fuzzy from 'fuzzy';
import styles from './styles';


class Network extends Component{
  constructor(props){
    super(props)
    const stateData = {"연세대": "강동웅","한국외대": "김정대","연세대": "김정규","연세대": "이영인","숭실대": "이고은","건국대": "공성원","명지대": "이충훈","숭실대": "문지현","성균관대": "차지환","수원대": "김명보","세종대": "유이경","한국외대": "윤나리","이화여대": "김민수","동국대": "임승범","성균관대": "하효원","이화여대": "허정인","성균관대": "박민규","성균관대": "조원호","연세대": "강동웅","한국외대": "김정대","연세대": "김정규","연세대": "이영인","숭실대": "이고은","건국대": "공성원","명지대": "이충훈","숭실대": "문지현","성균관대": "차지환","수원대": "김명보","세종대": "유이경","한국외대": "윤나리","이화여대": "김민수","동국대": "임승범","성균관대": "하효원","이화여대": "허정인","성균관대": "박민규","성균관대": "조원호"}
    this.states = [];
    for (let key in stateData) {
      if (stateData.hasOwnProperty(key)) {
        this.states.push(stateData[key]);
      }
    }

    this.state = {
      states: this.states,
    };

  }
  componentDidMount(){
    this.props.actions.changeNav('network')
    this.props.close()
  }
  render(){
    const statesList = this.state.states.map(function(elem, index) {
     return (
       <View key={index} style={styles.list}>
        <View style={styles.userList}>
          <Text style={styles.text}>{elem}</Text>
        </View>
       </View>
     )
   })

   return(
     <ScrollView style={styles.container} contentOffset={{y:50}}>
       {statesList}
     </ScrollView>
   )
  }
}

export default Network
