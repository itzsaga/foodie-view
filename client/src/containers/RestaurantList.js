import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../actions/actionCreators'

import Restaurant from '../components/Restaurant'

class RestaurantList extends Component {
  render () {
    let list
    const { restaurants } = this.props.places
    if (restaurants) {
      list =
        restaurants.map((r, i) => <Restaurant {...this.props} key={i} i={r.id} restaurant={r} />)
    } else {
      list = <p>Loading...</p>
    }
    return (
      <div className='list'>
        {list}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    places: state.places,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return { actionCreators: bindActionCreators(actionCreators, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantList))