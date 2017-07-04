import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// class Restaurant extends Component {
//   render () {
export default (props) => {
  const { restaurant, comments } = props
  return (
    <figure className='grid-figure'>
      <div className='grid-photo-wrap'>
        <Link to={`/restaurants/${restaurant.id}`}>
          <img src={`${restaurant.image_url}`} alt={restaurant.name} className='grid-photo' />
        </Link>
      </div>

      <figcaption>
        <p>{restaurant.name}</p>
        <div className='control-buttons'>
          <Link className='button' to={`/restaurants/${restaurant.id}`}>
            <span className='comment-count'>
              <span className='speech-bubble' />
              <span> {comments[restaurant.id] ? comments[restaurant.id].length : 0 }</span>
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}
// }

// export default Restaurant
