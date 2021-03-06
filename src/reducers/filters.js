/* eslint no-param-reassign: 0 */
import { FILTER_RESET, FILTERS_UPDATE } from '../actions/constants'
import { MAX_YEAR } from '../util/years'

const initialState = {
  crime: 'violent-crime',
  since: MAX_YEAR - 10,
  until: MAX_YEAR,
}

export default (state = initialState, action) => {
  let temp
  switch (action.type) {
    case FILTER_RESET:
      temp = Object.assign({}, state)
      delete temp[action.id]
      return temp
    case FILTERS_UPDATE:
      return {
        ...state,
        ...action.filters,
      }
    default:
      return state
  }
}
