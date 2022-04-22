import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const LoginScreen = props => {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace is for replace state
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr></hr>
      <button className='btn btn-primary' onClick={ handleLogin }>Login</button>
    </div>
  )
}

LoginScreen.propTypes = {}

export default LoginScreen
