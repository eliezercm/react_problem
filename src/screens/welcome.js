import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class welcome extends Component {
  render(){
    return(
      <View style={styles.body}>
          <Text>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop: 20,
  }
})