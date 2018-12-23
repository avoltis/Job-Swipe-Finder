import React, { Component } from 'react';
import { Text, View, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import parseLatLng from '../logic';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (
            <Button
                title="Settings"
                onPress={() => navigation.navigate('settings')}
                backgroundColor="rgba(0, 0, 0, 0)"
                color="rgba(0, 122, 255, 1)"
            />
        ),
        headerStyle: {
            marginTop: Platform.OS === "android" ? 24 : 0
        }
    })

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
        
            const {
                company, post_date, title, id, apply_url
            } = job;

            const initialRegion = parseLatLng(job);

            return (
                <Card title={title} key={id}>
                    <View style={{ height: 200 }}>
                        <MapView
                            initialRegion={initialRegion}
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>Company: {company.name}</Text>
                            <Text style={styles.italics}>Posted in: {post_date}</Text>
                        </View>
                        <Button
                            title="Apply Now!"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(apply_url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}


const styles = {
    italics: {
        fontStyle: 'italic'
    },
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}


function mapStateToProps(state) {
    return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);