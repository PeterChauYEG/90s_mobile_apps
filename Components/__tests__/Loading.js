import React from 'react'
import Loading from '../Loading'
import renderer from 'react-test-renderer'

describe('Loading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
