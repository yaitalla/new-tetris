import React from 'react'
import socket from '../config/socketConnect'
import { connect } from 'react-redux';

const App = ({message}) => {
  console.log(message)
  return (
      <div>
        <h2>{message}</h2>
      </div>
    )
}

const mapStateTopProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateTopProps)(App)