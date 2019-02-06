import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Use this to get a  job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <View>
        <Slides onComplete={this.onSlidesComplete} data={SLIDE_DATA} />
      </View>
    );
  }
}

export default WelcomeScreen;
