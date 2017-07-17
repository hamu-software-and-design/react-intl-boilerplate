/* @flow */
/** @module util */

/**
 * Parses query into an object with keys.
 * @param {string} queryString The query string to parse.
 * @returns {object} Object with query params as keys.
 */
export function parseQuery(queryString: string) {
  const queries = queryString.substring(1).split('&')
  return queries.reduce(function(acc, query) {
    const pairs = query.split('=')
    acc[pairs[0]] = pairs[1]
    return acc
  }, {})
}

/**
 * Get client language
 * @return {string} The client language (defaults to en)
 */
export function getClientLang(): string {
  const locale:string = navigator.userLanguage || navigator.language
  const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]
  return localeWithoutRegionCode || 'en'
}
