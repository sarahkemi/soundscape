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
      <View>
        <Text>I want to hear this artisit when I feel {this.props.mood}:</Text>
        <TextInput
          placeholder={'artist'}
          style={{height: 20, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          // value={this.state.text}
          placeholderTextColor={'#DADADA'}
        />
      </View>
    );
  }
}

// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
