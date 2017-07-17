/* @flow */
import React from 'react'
import {IntlProvider} from 'react-intl'
import { withRouter, Redirect } from 'react-router'
import {connect} from 'react-redux'
import * as RouterTypes from '../Router/flowtypes.js'
import * as StoreTypes from '../Store/flowtypes.js'
import {parseQuery} from '../util.js'

type PropTypes = {
  locale: string,
  location: RouterTypes.LocationType
}

/**
 * @class
 * @extends {React.Component}
 * Locale provider for the app.
 */
class LocaleProvider extends React.Component<void,PropTypes,void> {
  /**
   * Renders react elements.
   * @method
   * @memberof LocaleProvider
   * @emits Redirect If app lang does not match route.
   * @returns {ReactElement}
   */
  render() {
    const {locale, location} = this.props
    const lang = parseQuery(location.search).lang
    if(!lang || locale !== lang) {
      return <Redirect to={location.pathname + '?lang=' + locale} />
    }
    return (
      <IntlProvider locale={locale}>
        {this.props.children}
      </IntlProvider>
    )
  }
}

const mapStateToProps = (state: StoreTypes.StateType) => {
  return {
    locale: state.locale
  }
}

export default withRouter(connect(mapStateToProps, null)(LocaleProvider))
