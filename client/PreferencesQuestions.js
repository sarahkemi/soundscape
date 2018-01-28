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

  // propTypes: {
  //   savePrefs: React.PropTypes.func
  // }

  render() {
    console.log(this.state.data);
    const statements = this.state.data.map((emotion,index) => <MoodPreference style={styles.mood} mood={emotion} key={index}/>);
    return statements;
  }
}

const styles = StyleSheet.create({
  mood: {
    margin: 3,
  },
});
