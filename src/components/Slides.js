import React, { Component, } from 'react';
import { View, Text, ScrollView, Platform, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Slides extends Component {


    renderSlides = () => {
        return this.props.data.map((slideItem) => {

            return (
                <View
                    key={slideItem.text}
                    style={[styles.slideStyle, { backgroundColor: slideItem.color }]}
                >
                    <Text style={styles.slideText}>{slideItem.text}</Text>
                </View>
            );
        });
    }


    render() {
        return (
                <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
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
    }
}

export default Slides;