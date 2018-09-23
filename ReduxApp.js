/**
 * 90s Pop Lyrics Generator Mobile Apps
 *
 * @format
 * @flow
 */

// react
import React, { Component, Fragment } from 'react'

// react native
import { Button, Slider, StyleSheet, Text, TextInput, View } from 'react-native'

// redux
import { connect } from 'react-redux'

// redux actions
import { lyricGenerationRequest } from './actions'

type Props = {}
class MainApp extends Component<Props> {
  constructor (props) {
    super(props)

    this.state = {
      error: props.error,
      isLoading: props.isLoading,
      lyrics: props.lyrics,
      nChars: 50,
      sample: 'sweet dreams are made of '
    }
  }

  onNCharsChange = text => {
    this.setState({ nChars: text })
  }

  onPress = () => {
    const { nChars, sample } = this.state

    // set loading state
    this.setState({ isLoading: true })

    // construct data object
    const data = {
      n_chars: nChars,
      sample
    }

    fetch('http://172.30.227.0:5000/api/model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(lyrics => {
        console.log(lyrics)
        this.setState({ lyrics, isLoading: false })
      })
      .catch(error => this.setState({ isLoading: false, error }))
  }

  onSampleChange = text => {
    this.setState({ sample: text })
  }

  render () {    
    const { error, isLoading, lyrics, nChars, sample } = this.state

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.container}>
          <ErrorOccurred />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>90s Pop Lyric Generator</Text>

        {lyrics ? (
          <Lyrics lyrics={lyrics} sample={sample} />
        ) : (
          <Fragment>
            <Text style={styles.body}>Enter some initial lyrics</Text>
            <TextInput
              onChangeText={this.onSampleChange}
              placeholder='sweet dreams are made of these'
              style={styles.textInput}
              value={sample}
            />
            <Text style={styles.body}>Enter of characters to generate</Text>
            <Slider
              maximumValue={500}
              minimumValue={10}
              onValueChange={this.onNCharsChange}
              step={10}
              style={styles.textInput}
              value={nChars}
            />
            <Text>{nChars}</Text>
            {/* <Button
              accessibilityLabel='Generate lyrics from your initial lyrics'
              color='#841584'
              onPress={this.onPress}
              title='Generate'
            /> */}
            <Button
              accessibilityLabel='Generate lyrics from your initial lyrics'
              color='#841584'
              onPress={() => this.props.lyricGenerationRequest(nChars, sample)}
              title='Generate'
            />            
          </Fragment>
        )}
      </View>
    )
  }
}

const ErrorOccurred = () => {
  return <Text style={styles.title}>Uh oh, an error has occurred</Text>
}

const Loading = () => {
  return <Text style={styles.title}>predicting...</Text>
}

const Lyrics = props => {
  const { lyrics, sample } = props

  return (
    <Fragment>
      <Text style={styles.body}>Initial Lyrics</Text>
      <Text style={styles.body}>{sample}</Text>
      <Text style={styles.body}>Generated Lyrics</Text>
      <Text style={styles.body}>{lyrics}</Text>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  body: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textInput: {
    height: 40,
    width: 100
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

const mapStateToProps = state => ({
  lyricGenerator: state.lyricGenerator
})

const mapDispatchToProps = dispatch => ({
  lyricGenerationRequest: (nChars, sample) =>
    dispatch(lyricGenerationRequest(nChars, sample))
})

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)

export default ReduxApp
