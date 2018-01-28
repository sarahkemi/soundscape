import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from 'react-native-tabs';
import MoodPreference from './MoodPreference.js';
import PreferencesPage from './PreferencesPage.js';
import NewEntry from './NewEntry.js';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: '',
      showPreferences: true,
      showJournal: false,
    };
  }

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
    );
  }


  render() {
    return (
      <View style={styles.container}>
      {this.renderPreferencesPage()}
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="pref" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Preferences</Text>
            <Text name="journal" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Journal</Text>
        </Tabs>
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
