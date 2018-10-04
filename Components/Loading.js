/**
 * @format
 * @flow
 */

// react
import React from 'react'

// react native
import { Text } from 'react-native'

// styles
import styles from './styles/Loading'

const Loading = (_: void) => {
  return <Text style={styles.title}>predicting...</Text>
}

Loading.propTypes = {}
Loading.defaultProps = {}

export default Loading
