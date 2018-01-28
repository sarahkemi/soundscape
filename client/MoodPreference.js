import React from 'react';
import { AppRegistry, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

export default class MoodPreference extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  propTypes: {
    mood: React.PropTypes.string
  }

  render() {
    return (
      <View style={styles.prefs}>
        <Text style={styles.inputTitle}>when I feel {this.props.mood}, I want to hear:</Text>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder={'click to add artist..'}
          style={styles.input}
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
