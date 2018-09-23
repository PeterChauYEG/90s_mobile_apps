/**
 * @format
 * @flow
 */

// react
import React, { Fragment } from 'react'

// react native
import { Text } from 'react-native'

// styles 
import styles from './styles/Loading'

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

export default Lyrics