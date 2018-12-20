import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ReviewScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Review Jobs',
        headerRight: (
            <Text>Right</Text>
        )
    }

    render() {
        return (
            <View>
                <Text>Review Screen</Text>
                <Text>Review Screen</Text>
                <Text>Review Screen</Text>
                <Text>Review Screen</Text>
            </View>
        )
    }

}

export default ReviewScreen;