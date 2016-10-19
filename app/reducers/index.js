import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';
import React, {Component, ScrollView, Text, View, Image, Dimensions } from 'react-native';
   var userData;

const initialState = {
  navColor: '#fff',
  navStyle: {
    backgroundColor:'#ff585b',
    color:'#fff',
    padding:20
  },
  userDatas: {
    userEmail: "",
    userName: "",
    userUniv: "",
    image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/67707_1218935049621_959381_n.jpg?oh=39346cf19c9ec696e915d7990e459deb&oe=586E5521'
  },
  trips: {},
  listings: {},
  navigator: "",
  navProps: {
    name: "",
    type: "menu",
    icon: "menu"
  }
};

export function airbnb(state = initialState, action = {}) {
  switch(action.type){

    case types.LOGIN:
      return {
        ...state,
        userDatas:userData
      };

    case types.NAV:
      return {
        ...state,
        navigator: action.navigator
      };

    case types.NAVTO:
      console.log("Moving nave to " + action.props)
      state.navigator.replace({
        id: action.props,
        name: action.props,
      });

      return {
      ...state,
      openMenu: false
      };

    case types.NAV_TO_POP:
      return {
        ...state,
        navProps: {
          name:action.name,
          type:"pop",
          icon:'arrow-back'
        }
      }


    case types.CHANGE_NAV_STYLE:
      console.log("action prop :")
      console.log(action.prop)

      if(action.prop == "home"){
        return {
          ...state,
          navStyle: {
            backgroundColor:'#5e5e5e',
            color:'#fff'
          },
          navProps:{
            name:"인액터스",
            type:"menu",
            icon:"menu"
          }
        }
      }
      else if(action.prop == "intro"){
        return {
          ...state,
          navStyle: {
            backgroundColor:'#5e5e5e',
            color:'#fff'
          },
          navProps: {
            name:"인액터스 소개",
            type:"menu",
            icon:"menu"
          }
        }
      }
      else if(action.prop == "network"){
        return {
          ...state,
          navStyle: {
            backgroundColor:'#5e5e5e',
            color:'#fff'
          },
          navProps:{
          name:"네트워크",
          type:"menu",
          icon:"menu"
          }
        }
      }
      else if(action.prop == "unknown"){
        return {
          ...state,
          navStyle: {
            backgroundColor:'#5e5e5e',
            color:'#fff'
          },
          navProps:{
          name:"대나무숲",
          type:"menu",
          icon:"menu"
          }
        }
      }
      else if(action.prop == "feed"){
        return {
          ...state,
          navStyle: {
            backgroundColor:'#5e5e5e',
            color:'#fff'
          },
          navProps:{
          name:"인액터스",
          type:"menu",
          icon:"menu"
        }
      }
    }

    case types.GET_USER_INFO:
      console.log('actionData : ');
      console.log( action.data);
      return Object.assign({}, state, {
          ...state,
          userDatas: action.data
        })

    default:
      return state;
  }
}
