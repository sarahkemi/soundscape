import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodPreference from './MoodPreference.js'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: ["sad", "happy", "upset", "lonely", "scared"]
    }
  }

  renderTopBar() {
    return (
      <Text> Preferences </Text>
    );
  }

  render() {
    console.log(this.state.data);
    const statements = this.state.data.map((emotion,index) => <MoodPreference mood={emotion} key={index+1}/>);
    statements.unshift(<Text key={0}>Preferences</Text>);
    return statements;
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
