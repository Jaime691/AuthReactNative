/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBv-N41egdJCIIpJLAguLowVUPX41dT3ac",
      authDomain: "authreactnative-dc4f9.firebaseapp.com",
      databaseURL: "https://authreactnative-dc4f9.firebaseio.com",
      projectId: "authreactnative-dc4f9",
      storageBucket: "authreactnative-dc4f9.appspot.com",
      messagingSenderId: "931017654942"
    })
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
