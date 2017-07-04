import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  const { restaurant, comments } = props
  return (
    <figure className='grid-figure'>
      <div className='grid-photo-wrap'>
        <Link to={`/restaurants/${restaurant.place_id}`}>
          <img src={`${restaurant.image_url}`} alt={restaurant.name} className='grid-photo' />
        </Link>
      </div>

      <figcaption>
        <p>{restaurant.name}</p>
        <div className='control-buttons'>
          <Link className='button' to={`/restaurants/${restaurant.place_id}`}>
            <span className='comment-count'>
              <span className='speech-bubble' />
              <span> {comments[restaurant.place_id] ? comments[restaurant.place_id].length : 0 }</span>
            </span>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}
