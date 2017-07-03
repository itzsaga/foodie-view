// React stuff
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
        <Link to='/'>
          <h1 className='title'>Foodie View</h1>
        </Link>
        <Route exact path='/' component={Main} />
        <Route exact path='/restaurants' component={YelpList} />
        <Route path='/restaurants/:id' component={YelpShow} />
      </div>
    </Router>
  )
}

export default App
