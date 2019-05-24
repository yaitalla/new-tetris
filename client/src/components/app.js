import React from 'react'
import socket from '../config/socketConnect'
import Landing from './landing';

const globalStyle = {
  display: "flex",
  justifyContent: "center"
}

const App = () => {
  return (
      <div style={globalStyle} >
        <Landing/>
      </div>
    )
}


export default App;