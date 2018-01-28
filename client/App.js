import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodPreference from './MoodPreference.js';
import PreferencesPage from './PreferencesPage.js';
import NewEntry from './NewEntry.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPref: true,
      showEntries: false,
      showCompose: false,
      showPlaylist: false,
      // prefrences: {}
    };
    // this.savePreferences=this.savePreferences.bind(this);
  }

  // savePreferences(mood, artist) {
  //
  // }

  renderPreferencesPage () {
    return (
      <View style={styles.container}>
        <PreferencesPage/>
      </View>
    );
  }

  renderEntryPage() {
    return (
      <View>
        <NewEntry/>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPreferencesPage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
