import React from 'react'

// Testing libraries
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import renderer from 'react-test-renderer'

// Components
import ErrorOccurred from '../ErrorOccurred'

// Configure enzyme to work with react
Enzyme.configure({ adapter: new Adapter() })

describe('ErrorOccurred', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ErrorOccurred clearLyrics={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('simulates "Start over" button click', () => {
    const clearLyrics = jest.fn()

    const wrapper = shallow(
      <ErrorOccurred clearLyrics={clearLyrics}
      />
    )
    wrapper.find('Button').simulate('press') 
    expect(clearLyrics).toHaveBeenCalled()
  })
})
