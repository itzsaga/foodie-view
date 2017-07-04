import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Restaurant from './Restaurant'

class Single extends Component {
  render () {
    const i = this.props.restaurants.businesses.findIndex((restaurant) => restaurant.id === this.props.match.params.id)
    const restaurant = this.props.restaurants.businesses[i]
    console.log(restaurant)
    return (
      <div className='single'>
        <Restaurant i={i} restaurant={restaurant} {...this.props} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single))
