import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Restaurant from './Restaurant'

class RestaurantList extends Component {
  render () {
    return (
      <div className='list'>
        {/*{this.props.places.restaurants.map((restaurant, i) => <Restaurant {...this.props} key={i} i={restaurant.id} restaurant={restaurant} />)}*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)