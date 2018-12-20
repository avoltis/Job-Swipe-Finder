import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
        AsyncStorage.removeItem('fb_token'); // DELETE 
    }

    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
                <Text>Auth Screen</Text>
            </View>
        )
    }

}

export default connect(null, actions)(AuthScreen);