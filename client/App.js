import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodPreference from './MoodPreference.js'
import PreferencesPage from './PreferencesPage.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  renderPreferncesPage () {
    return (
      <View style={styles.container}>
        <PreferencesPage/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPreferncesPage()}
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
