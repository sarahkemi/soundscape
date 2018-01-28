import React from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, Keyboard, View, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { WebBrowser } from 'expo';
var config = require('./config');

export default class NewEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: '', savedPrefs: {}, playlistExists: false, playlistUrl:''};
    this.onPress=this.onPress.bind(this);
    this.openSpotify=this.openSpotify.bind(this);
  }

  // componentWillMount () {
  //   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  //   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  // }
  //
  // componentWillUnmount () {
  //   this.keyboardDidShowListener.remove();
  //   this.keyboardDidHideListener.remove();
  // }
  //
  // _keyboardDidShow () {
  //   alert('Keyboard Shown');
  // }
  //
  // _keyboardDidHide () {
  //   alert('Keyboard Hidden');
  // }

  onPress() {
        this._saveJournal().then(
        this._getPrefs()).then(
        this._getPlaylist())
  }

  async _getPrefs(){
  let moodKey  = '@SoundscapeMoodKey'

  output = {}

  try {
    const value = await AsyncStorage.getItem(moodKey)
    if (value !== null){
      result = JSON.parse(value)
      this.setState({savedPrefs: result})
    }

    return output
  } catch (error) {
      console.log(error)

      return output
    }

}

  async _saveJournal() {
  let entry = this.state.text

  try {
    await AsyncStorage.setItem('@SoundscapeJournal', entry)
    console.log("data saved")
  } catch (error) {
      console.log("save error")
      console.log(error)
  }
}

async _getJournal() {
  let journal = '@SoundscapeJournal'
  try {
    const value = await AsyncStorage.getItem(journal)
    if (value !== null){
      console.log("got data!")
      this.setState({text: value})
    }
  } catch (error) {
      console.log("retrieve error")
      console.log(error)
    }
}

async _getPlaylist() {
  try {
    let response = await fetch(config.server_url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: this.state.text,
        pref: this.state.savedPrefs,
      }),
})
    let responseJson = await response.json();
    await this.setState({playlistExists: true, playlistUrl: responseJson.playlist.playlist_url})
  } catch (error) {
    console.error(error);
  }
}

  componentWillMount(){
    this._getJournal()
    this._getPrefs()
  }

  async openSpotify(){
    let result = await WebBrowser.openBrowserAsync(this.state.playlistUrl);
  }


  renderPlaylistAccess() {
    return (
      <View style={styles.playlistAccess}>
      <Button
        onPress={this.openSpotify}
        style={styles.playlistButton}
        title="Listen to your soundscape"
        color="#841584"
        accessibilityLabel="Listen to your soundscape"
      />
      </View>
    );
  }



  render() {
    return (
      <ScrollView contentContainerStyle={styles.entryContainer}>
        <Text style={styles.title}>Entry of the day...</Text>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder={'click to enter your journal entry for today...'}
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholderTextColor={'#DADADA'}
          multiline={true}
          maxLength={1000}
        />
        <View style={styles.submitbutton}>
          <Button
            onPress={this.onPress}
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        {this.state.playlistExists && this.renderPlaylistAccess()}
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        />
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    minHeight: 120,
    width: 350,
  },
  entryContainer: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    margin: 20,
    maxWidth: 350,
  },
  submitbutton: {
    marginBottom: 0,
    height: 50,
  },
  playlistAccess: {
    marginTop: 20,
  },
  playlistButton: {
    height: 50,
  }
});
