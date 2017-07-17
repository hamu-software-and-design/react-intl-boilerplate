/* @flow */
import React from 'react'
import StoreProvider from './Store/Index.js'
import Router from './Router/Index.js'
import {createBrowserHistory} from 'history'

/**
 * @class
 * @extends {React.Component}
 * App entry point.
 */
export default class App extends React.Component {
  /**
  * Renders the react element.
   * @memberof App
   * @method render
   * @returns {ReactElement}
   */
  render() {
    const history = createBrowserHistory()
    return (
      <StoreProvider history={history}>
        <Router history={history} />
      </StoreProvider>
    )
  }
}
