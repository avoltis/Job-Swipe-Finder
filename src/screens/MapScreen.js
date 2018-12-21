import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {

    state = {
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    initialRegion={this.state.region}
                    style={{ flex: 1 }}
                />
            </View>
        )
    }

}

export default MapScreen;