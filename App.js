import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <Text>App</Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
});
