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

// components
import ErrorOccurred from './ErrorOccurred'
import Loading from './Loading'
import Lyrics from './Lyrics'

// styles 
import styles from './styles/ReduxApp'

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
