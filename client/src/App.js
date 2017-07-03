// React stuff
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// Components
import Main from './components/Main'
import YelpList from './components/YelpList'
import YelpShow from './components/YelpShow'

// CSS
import 'mini.css'
import './styles/title.css'

const history = createHistory()

export const App = () => {
  return (
    <Router history={history}>
      <div>
        <h1 className='title'>Foodie View</h1>
        <Route exact path='/' component={Main} />
        <Route exact path='/list' component={YelpList} />
        <Route exact path='/view/:id' component={YelpShow} />
      </div>
    </Router>
  )
}

export default App
