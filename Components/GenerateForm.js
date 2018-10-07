/**
 *
 * @format
 * @flow
 */

// react
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// react native
import { Button, Slider, Text, TextInput, View } from 'react-native'

// watch
import * as watch from 'react-native-watch-connectivity'

// styles
import styles from './styles/GenerateForm'

type Props = {
  lyricGenerationRequest: (number, string) => void
}
type State = {
  nChars: number,
  sample: string
}
class GenerateForm extends Component<Props, State> {
  static propTypes = {
    lyricGenerationRequest: PropTypes.func.isRequired
  }
  
  static defaultProps = {}
  
  constructor (props: Props) {
    super(props)

    this.state = {
      nChars: 50,
      sample: 'sweet dreams are made of '
    }
    
  }

  onNCharsChange = (number: number) => {
    this.setState({ nChars: number })
  }

  onSampleChange = (text: string) => {
    this.setState({ sample: text })
  }

  render () {
    const { lyricGenerationRequest } = this.props
    const { nChars, sample } = this.state

    // creates a subscription for messages from the watch 
    // then makes a generate request
    watch.subscribeToMessages((err, message, reply) => {
      if (err) {
        console.log(err)
        return
      }
    
      reply({text: "message received!"})
      if (message.action === "generate") {
        this.setState({ sample: message.sample })
        lyricGenerationRequest(nChars, message.sample)
      }
        
    })
    
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
