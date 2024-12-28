import React from 'react'
import { Link } from 'react-router'

export const Register = () => {
  
  return (
    <div>
      <h1>Register</h1>
      <form>
      <input type="text" placeholder='Enter Name' /><br/>
        <input type="text" placeholder='User Name' /><br/>
        <input type="password" placeholder='Password' /><br/>
        <button type='submit'>Register</button>
      </form>
      <p> Already have an account... <Link to='/login'>Login</Link></p>
    </div>
  )
}
