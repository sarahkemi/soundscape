import React from 'react';
import { AppRegistry, Keyboard, StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';

export default class MoodPreference extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.onEndEditing = this.onEndEditing.bind(this);
  }

  propTypes: {
    mood: React.PropTypes.string
  }

  onEndEditing() {
    this._saveMood()
  }

async _saveMood() {
  let mood = '@SoundscapeMoods:' + this.props.mood
  let search = this.state.text

  try {
    await AsyncStorage.setItem(mood, search)
    console.log("data saved")
  } catch (error) {
      console.log("save error")
      console.log(error)
  }
}

async _getMood() {
  let mood = '@SoundscapeMoods:' + this.props.mood
  try {
    const value = await AsyncStorage.getItem(mood)
    if (value !== null){
      console.log("got data!")
      this.setState({text: value})
    }
  } catch (error) {
      console.log("retrieve error")
      console.log(error)
    }
}
  
  componentWillMount(){
    this._getMood()
  }

  render() {
    return (
      <View style={styles.prefs}>
        <Text style={styles.inputTitle}>when I feel {this.props.mood}, I want to hear:</Text>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder={'click to add artist..'}
          style={styles.input}
          onEndEditing = {this.onEndEditing}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholderTextColor={'#DADADA'}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  prefs: {
    marginBottom: 10,
  },
  inputTitle: {
    marginBottom: 2,
    fontSize: 20,
  },
  input: {
    height: 25,
    fontSize: 18, 
    // borderColor: 'gray', 
    // borderWidth: 1,
    marginBottom: 2,
  },
});
