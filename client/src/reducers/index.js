import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import comments from './comments'
import restaurants from './restaurants'

const rootReducer = combineReducers({
  comments,
  restaurants,
  routing: routerReducer
})

export default rootReducer