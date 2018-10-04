/**
 * @format
 * @flow
 */

// react
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// react native
import { Button, Text } from 'react-native'

// styles
import styles from './styles/Loading'

type Props = {
  clearLyrics: () => void,
  lyrics: string,
  nChars: number,
  sample: string
}

const Lyrics = (props: Props) => {
  const { clearLyrics, lyrics, nChars, sample } = props

  return (
    <Fragment>
      <Text style={styles.body}>Initial Lyrics</Text>
      <Text style={styles.body}>{sample}</Text>

      <Text style={styles.body}>Number of characters generated</Text>
      <Text style={styles.body}>{nChars}</Text>

      <Text style={styles.body}>Generated Lyrics</Text>
      <Text style={styles.body}>{lyrics}</Text>

      <Button
        accessibilityLabel='Start this process over and enter new parameters'
        color='#841584'
        onPress={() => clearLyrics()}
        title='Start over'
      />
    </Fragment>
  )
}

Lyrics.propTypes = {
  clearLyrics: PropTypes.func.isRequired,
  lyrics: PropTypes.string.isRequired,
  nChars: PropTypes.number.isRequired,
  sample: PropTypes.string.isRequired
}
Lyrics.defaultProps = {}

export default Lyrics
