/**
 *
 * @format
 * @flow
 */

// react
import React, { Component, Fragment } from 'react'

// react native
import { Button, Slider, Text, TextInput, View } from 'react-native'

// styles 
import styles from './styles/GenerateForm'

type Props = {}
class GenerateForm extends Component<Props> {
  constructor (props) {
    super(props)

    this.state = {
      nChars: 50,
      sample: 'sweet dreams are made of '
    }
  }

  onNCharsChange = text => {
    this.setState({ nChars: text })
  }

  onSampleChange = text => {
    this.setState({ sample: text })
  }

  render () {    
    const { lyricGenerationRequest } = this.props
    const { nChars, sample } = this.state
    
    return (
      <Fragment>
        <Text style={styles.body}>Enter some initial lyrics</Text>
        <TextInput
          onChangeText={this.onSampleChange}
          placeholder='sweet dreams are made of these'
          style={styles.textInput}
          value={sample}
        />
        <Text style={styles.body}>Enter of characters to generate</Text>
        <Slider
          maximumValue={500}
          minimumValue={10}
          onValueChange={this.onNCharsChange}
          step={10}
          style={styles.textInput}
          value={nChars}
        />
        <Text>{nChars}</Text>
        <Button
          accessibilityLabel='Generate lyrics from your initial lyrics'
          color='#841584'
          onPress={() => lyricGenerationRequest(nChars, sample)}
          title='Generate'
        />            
      </Fragment>
    )
  }
}

export default GenerateForm
