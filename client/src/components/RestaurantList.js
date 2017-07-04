import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Restaurant from './Restaurant'

class RestaurantList extends Component {
  render () {
    let list
    const { restaurants } = this.props.places
    console.log(restaurants)
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)