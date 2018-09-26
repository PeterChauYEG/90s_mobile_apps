import React from 'react'
import Lyrics from '../Lyrics'
import renderer from 'react-test-renderer'

describe('ErrorOccurred', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Lyrics clearLyrics={() => {}} lyrics='' nChars={0} sample='' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // TODO: - write test for button click
})
