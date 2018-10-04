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
import { clearLyrics, lyricGenerationRequest } from '../Redux/actionCreators'

// components
import ErrorOccurred from './ErrorOccurred'
import GenerateForm from './GenerateForm'
import Loading from './Loading'
import Lyrics from './Lyrics'

// styles
import styles from './styles/ReduxApp'

// types 
type LyricGeneratorState = {
  error?: string,
  isLoading: boolean,
  lyrics?: string,
  nChars: number,
  sample: string 
}

type ReduxState = {
  lyricGenerator: LyricGeneratorState
}

type Props = {
  clearLyrics: () => void,
  lyricGenerationRequest: (number, string) => void,
  lyricGenerator: LyricGeneratorState
}

export class MainApp extends Component<Props> {
  static propTypes = {
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

  static defaultProps = {}
  
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
          <Lyrics
            clearLyrics={clearLyrics}
            lyrics={lyrics}
            nChars={nChars}
            sample={sample}
          />
        ) : (
          <GenerateForm lyricGenerationRequest={lyricGenerationRequest} />
        )}
      </View>
    )
  }
}

export const mapStateToProps = (state: ReduxState)  => ({
  lyricGenerator: state.lyricGenerator
})

export const mapDispatchToProps = (dispatch: *) => ({
  lyricGenerationRequest: (nChars: number, sample: string) =>
    dispatch(lyricGenerationRequest(nChars, sample)),
  clearLyrics: () => dispatch(clearLyrics())
})

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(MainApp)

export default ReduxApp
