import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import PreferencesQuestions from './PreferencesQuestions.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      preferences: {}
    }
    // this.saveEntries=this.saveEntries.bind(this);
  }

  // saveEntries(mood, artist) {
  //   this.setState({preferences: {mood: artist}});
  // }

  render() {
    return (
      <ScrollView>
        <Text>Preferences</Text>
        <PreferencesQuestions/>
        <Button
          // onPress={this.saveEntries}
          title="Continue"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
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
