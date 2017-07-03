// React & Redux stuff
import React from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

// Components
import App from './components/App'
import Home from './components/Home'
import RestaurantList from './components/RestaurantList'
import RestaurantShow from './components/RestaurantShow'

// Reducer
import rootReducer from './reducers/index'

// CSS
import 'mini.css'
import './styles/title.css'

// Mock data
import restaurants from './data/restaurants'
import comments from './data/comments'

import registerServiceWorker from './registerServiceWorker'

const defaultState = {
  comments,
  restaurants
}

const history = createHistory()

const store = createStore(rootReducer, defaultState, window.devToolsExtension ? window.devToolsExtension() : f => f)

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path='/' component={Home} />
        <Route exact path='/restaurants' component={RestaurantList} />
        <Route exact path='/restaurants/:id' component={RestaurantShow} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
