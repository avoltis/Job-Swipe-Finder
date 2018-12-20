import React, { Component, } from 'react';
import { View, Text, ScrollView, Platform, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Slides extends Component {

    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title="Onwards, You're ready!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            );
        }
    }

    renderSlides = () => {
        return this.props.data.map((slideItem, index) => {

            return (
                <View
                    key={slideItem.text}
                    style={[styles.slideStyle, { backgroundColor: slideItem.color }]}
                >
                    <Text style={styles.slideText}>{slideItem.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                horizontal
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>

        );
    }
}

const styles = {
    slideText: {
        fontSize: 30,
        color: 'white'
    },
    slideStyle: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
}

export default Slides;