/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super (props)
    
    this.state = {
      result: null,
      error: null,
      isLoading: false,
      n_chars: 50,
      sample: "sweet dreams are made of ",
    }
  }
  
  componentDidMount () {
    const { n_chars, sample } = this.state
    
    // set loading state
    this.setState({ isLoading: true })
    
    // construct data object
    const data = { n_chars, sample }
    
    fetch('http://localhost:5000/api/model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => this.setState({ result, isLoading: false }))
      .catch(error => this.setState({ isLoading: false, error }))
      
  }
  
  render() {
    const { 
      error, 
      isLoading, 
      result, 
      sample, 
    } = this.state
        
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>loading...</Text>
        </View>
      )      
    }
    
    if (error) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{error}</Text>
        </View>
      )      
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>90s Pop Lyric Generator</Text>
        <Text style={styles.body}>Initial Lyrics</Text>
        <Text style={styles.body}>{sample}</Text>
        <Text style={styles.body}>Generated Lyrics</Text>
        <Text style={styles.body}>{result}</Text>
      </View>
    );  
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>90s Pop Lyric Generator</Text>
        <Text style={styles.body}>Enter some initial lyrics</Text>
        <Text style={styles.body}>Enter of characters to generate</Text>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  body: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
