import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Restaurant from './Restaurant'

class RestaurantList extends Component {
  render () {
    return (
      <div className='list'>
        {this.props.restaurants.businesses.map((restaurant, i) => <Restaurant {...this.props} key={i} i={restaurant.id} restaurant={restaurant} />)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantList))
