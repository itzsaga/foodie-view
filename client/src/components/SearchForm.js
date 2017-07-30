import React, { Component } from 'react'
import * as actionCreators from '../actions/actionCreators'
import { fetchYelp } from '../actions/actionCreators'

export default class SearchForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      zip_code: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const zip_code = this.state.zip_code
    const name = this.state.name
    fetchYelp(zip_code, name)
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
            required
          />
          <label>
            5 Digit Zip Code:
          </label>
          <input id='zip_code'
            type='text'
            name='zip_code'
            value={this.state.zip_code}
            onChange={this.handleChange}
            pattern='[0-9]{5}'
            required
          />
          <button type='submit'>Search</button>
        </div>
      </form>
    )
  }
}
