/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';

import LoginRoot from './navigatorTest/LoginStackNavigator';
export default class App extends  Component {
  render(){
    return (
        <LoginRoot />
    );
  }
};