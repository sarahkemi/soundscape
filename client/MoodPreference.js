import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MoodPreference extends React.Component {

  propTypes: {
    mood: React.PropTypes.string
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I want to hear this artisit when I feel {this.props.mood}:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
