import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <Link to='/'><h1 className='title'>Foodie View</h1></Link>
        {this.props.children}
      </div>
    )
  }
}

export default App
