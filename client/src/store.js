import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// import the root reducer
import rootReducer from './reducers/index'

import restaurants from './data/restaurants'

const defaultState = {
  restaurants
}

const history = createHistory()

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(history)

export default store
