import React, { Component } from 'react';
import { Text, View, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';
import parseLatLng from '../logic';


const CARD_HEIGHT = Dimensions.get('window').height > 600 ? 470 : null;

class DeckScreen extends Component {

    renderCard = (job) => {

        const initialRegion = parseLatLng(job);

        return (
            <Card title={job.title} containerStyle={{ height: CARD_HEIGHT }}>
                <View style={{ height: 300 }}>
                    <MapView
                        initialRegion={initialRegion}
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android'}
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
                    onSwipeRight={job => this.props.likeJob(job)}
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

export default connect(mapStateToProps, actions)(DeckScreen);