import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import * as actionCreators from '../actions/actionCreators'

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

function mapStateToProps (state) {
  return {
    restaurants: state.restaurants,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
