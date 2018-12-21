import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';



class DeckScreen extends Component {

    renderCard = (job) => {

        longitude = Platform.OS === 'android' ? parseFloat(job.company.location.lng) : job.company.location.lng
        latitude = Platform.OS === 'android' ? parseFloat(job.company.location.lat) : job.company.location.lat
 
        const initialRegion = {
            longitude,
            latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }

        return (
            <Card title={job.title}>
                <View style={{ height: 300 }}>
                    <MapView
                        initialRegion={initialRegion}
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android' ? true : false}
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