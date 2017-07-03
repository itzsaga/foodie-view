import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Restaurant extends Component {
  render () {
    const { restaurant, i, comments } = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/restaurants/${restaurant.id}`}>
            <div className='section'><h3>{restaurant.name}</h3></div>
            <img src={`${restaurant.image_url}`} className='section media' />
          </Link>
        </div>
      </figure>
    )
  }
}

export default Restaurant
