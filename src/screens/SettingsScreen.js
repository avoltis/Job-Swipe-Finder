import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends Component {

    render() {
        return (
            <View style={{marginTop: 20}}>
                <Button
                    title="Clear Liked Jobs"
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        )
    }

}

export default connect(null, actions)(SettingsScreen);