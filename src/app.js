import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDug7S02JsjGX29CFRBabcdTnlXBL-yMzQ",
            authDomain: "webpack-92a38.firebaseapp.com",
            databaseURL: "https://webpack-92a38.firebaseio.com",
            storageBucket: "webpack-92a38.appspot.com",
            messagingSenderId: "399018148090"
        })
    }

    render() {
        return (
            <View >
                <Header headerText="Authentication" />
                <LoginForm />
            </View >
        );
    }
}

export default App;