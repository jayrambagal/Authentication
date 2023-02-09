import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404 page not found</h1>
      <NavLink to="/home">Go back to Home page</NavLink><br></br>
      <NavLink to="/signin">Go back to login Page</NavLink>
    </div>
  )
}

export default ErrorPage
