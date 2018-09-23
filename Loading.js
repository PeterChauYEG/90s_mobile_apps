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

const Loading = () => {
  return <Text style={styles.title}>predicting...</Text>
}

export default Loading