import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import { MapView, Permissions } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Map',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="map" size={30} color={tintColor} />
        }
    })

    state = {
        spinner: false,
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    async componentDidMount() {
        await Permissions.askAsync(Permissions.LOCATION);
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    onButtonPress = () => {

        this.setState({ spinner: true })

        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
            this.setState({ spinner: false })
        });
    }

    render() {

        // if (!this.state.mapLoaded) {
        //     return (
        //         <View style={{ flex: 1, justifyContent: 'center' }}>
        //             <ActivityIndicator size="large" />
        //         </View>
        //     );
        // }
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    initialRegion={this.state.region}
                    style={{ flex: 1 }}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Spinner
                        visible={this.state.spinner}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    />
                    <Button
                        title="Search Area"
                        backgroundColor="#009688"
                        icon={{ name: 'search' }}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        )
    }




}

const styles = {
    spinnerTextStyle: {
        color: '#FFF'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
}

export default connect(null, actions)(MapScreen);