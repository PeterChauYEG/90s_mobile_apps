import React from 'react'
import GenerateForm from '../GenerateForm'
import renderer from 'react-test-renderer'

describe('ErrorOccurred', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GenerateForm lyricGenerationRequest={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // TODO: - write test for button click
  // TODO: - write test for slider change
  // TODO: - write test for input change
})
