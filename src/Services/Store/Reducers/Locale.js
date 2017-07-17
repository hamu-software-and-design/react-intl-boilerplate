/* @flow */
import * as StoreTypes from '../flowtypes.js'
import {CHANGE_LOCALE} from '../Actions/Locale.js'
import {parseQuery, getClientLang} from '../../util.js'


const SUPPORTED_LANGS = ['en', 'vi']

function getInitialState(): string {
  const queries = parseQuery(window.location.search)
  if(!queries.lang) {
    const clientLang = getClientLang()
    return clientLang
  }
  else {
    return queries.lang
  }
}

/**
 * Locale reducer
 * @method
 * @param {string} state The current app locale.
 * @param {ActionType} action The action emitted.
 */
export default function LocaleReducer(state:string = getInitialState(), action: StoreTypes.ActionType) {
  switch(action.type) {
    case CHANGE_LOCALE:
      return action.locale
    default:
      return state
  }
}
