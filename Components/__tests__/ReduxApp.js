import React from 'react'
import { MainApp } from '../ReduxApp'
import renderer from 'react-test-renderer'

describe('ErrorOccurred', () => {
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
})
