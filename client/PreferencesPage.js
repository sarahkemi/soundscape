import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import PreferencesQuestions from './PreferencesQuestions.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      preferences: {}
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress(){

  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Listening Preferences</Text>
        <PreferencesQuestions/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
