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

// watch
import * as watch from 'react-native-watch-connectivity'

// types 
import type { State } from '../Redux/lyricGenerator'

// components
import ErrorOccurred from './ErrorOccurred'
import GenerateForm from './GenerateForm'
import Loading from './Loading'
import Lyrics from './Lyrics'

// styles
import styles from './styles/ReduxApp'

// types 
type ReduxState = {
  lyricGenerator: State
}

type Props = {
  clearLyrics: () => void,
  lyricGenerationRequest: (number, string) => void,
  lyricGenerator: State
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

    watch.getUserInfo().then(info => {
      console.log(info)
    }).catch(err => {
      console.log(err)
    })

    watch.sendMessage({text: "hi!"}, (err, replyMessage) => {
      console.log("message from watch", replyMessage)
    })
    
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
