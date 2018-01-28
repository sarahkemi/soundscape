import React from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, Keyboard, View, KeyboardAvoidingView } from 'react-native';

export default class NewEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onPress=this.onPress.bind(this);
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

  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Entry of the day...</Text>
        <TextInput
          underlineColorAndroid='transparent'
          placeholder={'click to enter your journal entry for today...'}
          // style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholderTextColor={'#DADADA'}
          multiline={true}
        />
        <View style={styles.submitbutton}>
          <Button
            onPress={this.onPress}
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
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
    paddingTop: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20
  },
  submitbutton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
  }
});
