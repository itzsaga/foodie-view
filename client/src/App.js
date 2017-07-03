// React & Redux stuff
import React from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

// Components
import Main from './components/Main'
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

const defaultState = {
  comments
}

const history = createHistory()

const store = createStore(rootReducer, defaultState, window.devToolsExtension ? window.devToolsExtension() : f => f)

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Link to='/'>
            <h1 className='title'>Foodie View</h1>
          </Link>
          <Route exact path='/' component={Main} />
          <Route exact path='/restaurants' component={RestaurantList} />
          <Route path='/restaurants/:id' component={RestaurantShow} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
