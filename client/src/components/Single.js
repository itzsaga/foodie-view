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
    let single
    if (this.props.places.restaurants) {
      const { id } = this.props.match.params
      const i = this.props.places.restaurants.findIndex((r) => r.place_id === id)
      const restaurant = this.props.places.restaurants[i]
      const restaurantComments = this.props.comments[id] || []
      single =
        <div className="single">
          <Restaurant i={i} restaurant={restaurant} {...this.props} />
          <Comments restaurantComments={restaurantComments} {...this.props} />
        </div>
    } else {
      <div className="single">
        single = <p>Loading...</p>
      </div>
    }
    return (
      <div>
        {single}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Single))
