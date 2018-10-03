import React from 'react'
import { 
  MainApp,
  mapDispatchToProps,
  mapStateToProps
} from '../ReduxApp'
import renderer from 'react-test-renderer'

describe('ReduxApp', () => {
  it('renders correctly', () => {
    const lyricGenerator = {
      error: undefined,
      isLoading: false,
      lyrics: undefined,
      nChars: 0,
      sample: ''
    }

    const tree = renderer
      .create(
        <MainApp
          clearLyrics={() => {}}
          lyricGenerationRequest={() => {}}
          lyricGenerator={lyricGenerator}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders loading state correctly', () => {
    const lyricGenerator = {
      error: undefined,
      isLoading: true,
      lyrics: undefined,
      nChars: 0,
      sample: ''
    }

    const tree = renderer
      .create(
        <MainApp
          clearLyrics={() => {}}
          lyricGenerationRequest={() => {}}
          lyricGenerator={lyricGenerator}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders error state correctly', () => {
    const lyricGenerator = {
      error: 'error',
      isLoading: false,
      lyrics: undefined,
      nChars: 0,
      sample: ''
    }

    const tree = renderer
      .create(
        <MainApp
          clearLyrics={() => {}}
          lyricGenerationRequest={() => {}}
          lyricGenerator={lyricGenerator}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders results state correctly', () => {
    const lyricGenerator = {
      error: undefined,
      isLoading: false,
      lyrics: '',
      nChars: 0,
      sample: ''
    }

    const tree = renderer
      .create(
        <MainApp
          clearLyrics={() => {}}
          lyricGenerationRequest={() => {}}
          lyricGenerator={lyricGenerator}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('maps state to props', () => {
    const state = {
      lyricGenerator: {}
    }
    
    const result = mapStateToProps(state)
    const expected = {
      lyricGenerator: {}
    }
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
  })
  
  it('maps dispatch to props', () => {    
    const result = mapDispatchToProps()
    const expected = {
      lyricGenerationRequest: () => {},
      clearLyrics: () => {},
    }
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
  })
})
