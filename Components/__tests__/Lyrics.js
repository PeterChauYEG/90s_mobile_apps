import React from 'react'

// Testing libraries
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import renderer from 'react-test-renderer'

// Component
import Lyrics from '../Lyrics'

// Configure enzyme to work with react
Enzyme.configure({ adapter: new Adapter() })

describe('ErrorOccurred', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Lyrics clearLyrics={() => {}} 
          lyrics='' 
          nChars={0} 
          sample='' 
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('simulates "Start over" button click', () => {
    const clearLyrics = jest.fn()

    const wrapper = shallow(
      <Lyrics clearLyrics={clearLyrics} 
        lyrics='' 
        nChars={0} 
        sample=''
      />
    )
    wrapper.find('Button').simulate('press') 
    expect(clearLyrics).toHaveBeenCalled()
  })
})
