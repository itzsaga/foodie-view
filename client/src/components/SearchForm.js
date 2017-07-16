import React, { Component } from 'react'
import * as actionCreators from '../actions/actionCreators'

export default class SearchForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      zip_code: ''
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.name,
      zip_code: e.target.zip_code
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
          </label>
          <input id='name'
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            required />
        </div>
        <div>
          <label>
            Zip Code:
          </label>
          <input id='zip_code'
            type='number'
            name='zip_code'
            value={this.state.zip_code}
            onChange={this.handleChange}
            pattern='[0-9]{5}'
            required />
        </div>
        <div>
          <button type='submit'>Search</button>
        </div>
      </form>
    )
  }
}
