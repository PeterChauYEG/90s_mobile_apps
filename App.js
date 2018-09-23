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
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducer
import rootReducer from './rootReducer'

// Container component
import ReduxApp from './ReduxApp'

type Props = {}
export default class App extends Component<Props> {
  render () {
    
    // create middleware 
    const middleware = []
    
    // create enhancers
    const enhancers = composeWithDevTools(
      applyMiddleware(...middleware)
    )
    
    // create the redux store
    const store = createStore(rootReducer, enhancers)

    return (
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    )
  }
}
