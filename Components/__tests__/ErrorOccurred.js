import React from 'react'
// import { shallow } from 'enzyme'
import ErrorOccurred from '../ErrorOccurred'
import renderer from 'react-test-renderer'

describe('ErrorOccurred', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ErrorOccurred clearLyrics={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  // it('simulates "Start over" button click', () => {
  //   const clearLyrics = jest.fn()
  //
  //   const wrapper = shallow(
  //     <ErrorOccurred clearLyrics={clearLyrics}
  //     />
  //   )
  //
  //   wrapper.find('Button').simulate('click')
  //
  //   expect(clearLyrics).toHaveBeenCalled()
  // })
})
