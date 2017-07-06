import React, { Component } from 'react'

export default class NewRestaurantForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      image_url: '',
      place_id: ''
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.name,
      image_url: e.target.image_url,
      place_id: e.target.place_id
    })
  }

  handleSubmit = e => {
    e.preventDefault()

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input id='restaurant-name'
                   type='text'
                   name='name'
                   value={this.state.name}
                   onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input id='restaurant-image-url'
                   type='text'
                   name="image_url"
                   value={this.state.image_url}
                   onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Restaurant ID (no spaces):
            <input id="restaurant-place-id"
                   type="text"
                   name="place_id"
                   value={this.state.place_id}
                   onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Add Restaurant</button>
        </div>
      </form>
    )
  }
}