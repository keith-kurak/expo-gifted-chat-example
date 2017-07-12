import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './chat';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Chat />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
