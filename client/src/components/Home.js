import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
  <div>
    <h2>Welcome to Foodie View!</h2>
    <h3>Choose an option below to discuss places around you.</h3>
    <ul>
      <li><Link to='/restaurants'>Restaurants</Link></li>
    </ul>
  </div>

export default Home
