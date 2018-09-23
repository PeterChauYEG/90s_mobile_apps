/**
 * @format
 * @flow
 */

// react
import React from 'react'

// react native
import { Text } from 'react-native'

// styles 
import styles from './styles/ErrorOccurred'

const ErrorOccurred = () => {
  return <Text style={styles.title}>Uh oh, an error has occurred</Text>
}

export default ErrorOccurred