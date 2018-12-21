import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {

    renderCard = (job) => {
        return (
            <Card title={job.title}>
                <View style={styles.detailWrapper}>
                    <Text>{job.company.name}</Text>
                    <Text>{job.post_date}</Text>
                </View>
                <Text>
                    {job.keywords}
                </Text>
            </Card>
        );
    }



    render() {
        return (
            <View>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
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
    }
}

function mapStateToProps({ jobs }) {
    console.log(jobs);
    return { jobs }
}

export default connect(mapStateToProps)(DeckScreen);