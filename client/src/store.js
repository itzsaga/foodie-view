import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// import the root reducer
import rootReducer from './reducers/index'

// Mock data
import restaurants from './data/restaurants'
import comments from './data/comments'

const defaultState = {
  restaurants,
  comments
}

const newHistory = createHistory()

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(newHistory)

export default store
