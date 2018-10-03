import React from 'react'

// Testing libraries
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import renderer from 'react-test-renderer'

// Components
import GenerateForm from '../GenerateForm'

// Configure enzyme to work with react
Enzyme.configure({ adapter: new Adapter() })

describe('GenerateForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GenerateForm lyricGenerationRequest={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('simulates "Start over" button click', () => {
    const lyricGenerationRequest = jest.fn()

    const wrapper = shallow(
      <GenerateForm lyricGenerationRequest={lyricGenerationRequest}
      />
    )
    wrapper.find('Button').simulate('press') 
    expect(lyricGenerationRequest).toHaveBeenCalled()
  })
  
  it('simulates input change', () => {
    const instanceOf = renderer
      .create(<GenerateForm lyricGenerationRequest={() => {}} />)
      .getInstance()
      
    instanceOf.onSampleChange('test')
    expect(instanceOf.state.sample).toEqual('test')
  })
  
  it('simulates input change', () => {
    const instanceOf = renderer
      .create(<GenerateForm lyricGenerationRequest={() => {}} />)
      .getInstance()
      
    instanceOf.onNCharsChange(1)
    expect(instanceOf.state.nChars).toEqual(1)
  })
})
