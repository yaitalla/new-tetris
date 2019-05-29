import React from 'react'
import socket from '../config/socketConnect'
import Landing from './landing';
import { connect } from 'react-redux';
import Game from './game';

const globalStyle = {
  display: "flex",
  justifyContent: "center"
}

const App = ({actualRoom, rooms}) => {
  return (
      <div style={globalStyle} >
      {
        actualRoom != -1 ? <Game/> : <Landing/>
      }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    actualRoom: state.actualRoom,
    rooms: state.rooms
  }
}

export default connect(mapStateToProps)(App);