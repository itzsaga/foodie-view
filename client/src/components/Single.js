import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

// Components
import Restaurant from './Restaurant'
import Comments from './Comments'

class Single extends Component {
  render () {
    const { id } = this.props.match.params
    const i = this.props.places.findIndex((restaurant) => restaurant.id === id)
    const restaurant = this.props.places[i]
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
    places: state.places,
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Single)
