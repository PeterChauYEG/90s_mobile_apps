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

// reudx-saga
import createSagaMiddleware from 'redux-saga'

// reducer
import rootReducer from './rootReducer'

// saga 
import rootSaga from './rootSaga'

// Container component
import ReduxApp from './ReduxApp'

type Props = {}
export default class App extends Component<Props> {
  render () {
    
    // create middleware 
    const middleware = []
    
    // create saga middleware
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)
    
    // create enhancers
    const enhancers = composeWithDevTools(
      applyMiddleware(...middleware)
    )
    
    // create the redux store
    const store = createStore(rootReducer, enhancers)

    sagaMiddleware.run(rootSaga)
  
    return (
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    )
  }
}
