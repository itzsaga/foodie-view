import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

// Components
import Restaurant from './Restaurant'
import Comments from './Comments'

class Single extends Component {
  render () {
    const { id } = this.props.match.params
    const i = this.props.restaurants.businesses.findIndex((restaurant) => restaurant.id === id)
    const restaurant = this.props.restaurants.businesses[i]
    const restaurantComments = this.props.comments[id] || []
    return (
      <div className='single'>
        <Restaurant i={i} restaurant={restaurant} {...this.props} />
        <Comments restaurantComments={restaurantComments} {...this.props} />
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
