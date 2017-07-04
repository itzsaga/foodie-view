import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import comments from './comments'
import places from './places'

const rootReducer = combineReducers({
  comments,
  places,
  routing: routerReducer
})

export default rootReducer