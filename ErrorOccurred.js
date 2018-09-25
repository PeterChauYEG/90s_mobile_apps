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
import styles from './styles/ErrorOccurred'

const ErrorOccurred = props => {
  const { clearLyrics } = props
  
  return (
    <Fragment>
      <Text style={styles.title}>Uh oh, an error has occurred</Text>    
      <Button
        accessibilityLabel='Start this process over and enter new parameters'
        color='#841584'
        onPress={() => clearLyrics()}
        title='Start over'
      /> 
    </Fragment>
  )
}

ErrorOccurred.propTypes = {
  clearLyrics: PropTypes.func.isRequired
}
ErrorOccurred.defaultProps = {}

export default ErrorOccurred