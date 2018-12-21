import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';



class DeckScreen extends Component {

    renderCard = (job) => {

        const initialRegion = {
            longitude: job.company.location.lng,
            latitude: job.company.location.lat,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }

        return (
            <Card title={job.title}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android' ? true : false}
                        initialRegion = {initialRegion}
                    >

                    </MapView>
                </View>

                <View style={styles.detailWrapper}>
                    <Text>Company: {job.company.name}</Text>
                    <Text>Posted in: {job.post_date}</Text>
                </View>
                <Text>{job.type.name}:  {job.category.name}</Text>
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return (
            <Card title="No more jobs">
            </Card>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        )
    }

}

const styles = {
    detailWrapper: {
        flexDirections: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30
    }
}

function mapStateToProps({ jobs }) {
    return { jobs }
}

export default connect(mapStateToProps)(DeckScreen);