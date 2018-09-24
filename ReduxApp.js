/**
 * 90s Pop Lyrics Generator Mobile Apps
 *
 * @format
 * @flow
 */

// react
import React, { Component } from 'react'

// react native
import { Text, View } from 'react-native'

// redux
import { connect } from 'react-redux'

// redux actions
import { lyricGenerationRequest } from './actions'

// components
import ErrorOccurred from './ErrorOccurred'
import GenerateForm from './GenerateForm'
import Loading from './Loading'
import Lyrics from './Lyrics'

// styles 
import styles from './styles/ReduxApp'

type Props = {}
class MainApp extends Component<Props> {
  onNCharsChange = text => {
    this.setState({ nChars: text })
  }

  onSampleChange = text => {
    this.setState({ sample: text })
  }

  render () {    
    const { lyricGenerationRequest } = this.props
    const { error, isLoading, lyrics, nChars, sample } = this.props.lyricGenerator 
    
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
          <Lyrics lyrics={lyrics} nChars={nChars} sample={sample} />
        ) : (
          <GenerateForm lyricGenerationRequest={lyricGenerationRequest}/>
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
