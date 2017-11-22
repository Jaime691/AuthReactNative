/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBv-N41egdJCIIpJLAguLowVUPX41dT3ac',
      authDomain: 'authreactnative-dc4f9.firebaseapp.com',
      databaseURL: 'https://authreactnative-dc4f9.firebaseio.com',
      projectId: 'authreactnative-dc4f9',
      storageBucket: 'authreactnative-dc4f9.appspot.com',
      messagingSenderId: '931017654942'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
