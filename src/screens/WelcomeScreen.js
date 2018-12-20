import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job App', color: '#03A9F4' },
    { text: 'Use this to get a  job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {  
        return (
            <View>
                <Slides onComplete={this.onSlidesComplete} data={SLIDE_DATA} />
            </View>
        )
    }

}

export default WelcomeScreen;