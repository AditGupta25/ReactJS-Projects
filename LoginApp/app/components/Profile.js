import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Profile extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Member Area</Text>
      </View>
     
    );
  } 
    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#289683'
  },
  text: {
    color: '#fff'
  }
});

