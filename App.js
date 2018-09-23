/**
 * 90s Pop Lyrics Generator Mobile Apps
 *
 * @format
 * @flow
 */

// react
import React, { Component } from 'react'

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// reducer
import rootReducer from './rootReducer'

// Container component
import ReduxApp from './ReduxApp'

type Props = {}
export default class App extends Component<Props> {
  render () {
    
    // create the redux store
    const store = createStore(rootReducer)

    return (
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    )
  }
}
