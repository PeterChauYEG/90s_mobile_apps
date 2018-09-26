/**
 * 90s Pop Lyrics Generator Mobile Apps
 *
 * @format
 * @flow
 */

// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// react native
import { Text, View } from 'react-native'

// redux
import { connect } from 'react-redux'

// redux actions
import { clearLyrics, lyricGenerationRequest } from '../actions'

// components
import ErrorOccurred from './ErrorOccurred'
import GenerateForm from './GenerateForm'
import Loading from './Loading'
import Lyrics from './Lyrics'

// styles 
import styles from './styles/ReduxApp'

type Props = {}
export class MainApp extends Component<Props> {
  render () {    
    const { 
      clearLyrics, 
      lyricGenerationRequest,
      lyricGenerator: { error, isLoading, lyrics, nChars, sample }
    } = this.props
    
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
          <ErrorOccurred clearLyrics={clearLyrics} />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>90s Pop Lyric Generator</Text>

        {lyrics ? (
          <Lyrics clearLyrics={clearLyrics} lyrics={lyrics} nChars={nChars} sample={sample} />
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
    dispatch(lyricGenerationRequest(nChars, sample)),
  clearLyrics: () =>
    dispatch(clearLyrics())
})

const ReduxApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)


MainApp.propTypes = {
  clearLyrics: PropTypes.func.isRequired, 
  lyricGenerationRequest: PropTypes.func.isRequired,
  lyricGenerator: PropTypes.shape({
    error: PropTypes.string, 
    isLoading: PropTypes.bool.isRequired, 
    lyrics: PropTypes.string, 
    nChars: PropTypes.number.isRequired, 
    sample: PropTypes.string.isRequired
  })
}

ReduxApp.defaultProps = {}

export default ReduxApp
