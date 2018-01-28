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
      {this.state.showPreferences && this.renderPreferencesPage()}
      {this.state.showJournal && this.renderEntryPage()}
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'#841584'}} onSelect={el=>this.setState({page:el.props.name, showPreferences:this.state.showJournal, showJournal:this.state.showPreferences})}>
            <Text name="pref" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#841584'}}>Preferences</Text>
            <Text name="journal" selectedIconStyle={{borderTopWidth:2,borderTopColor:'#841584'}}>Journal</Text>
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
