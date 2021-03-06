import React from 'react'
import socket from '../config/socketConnect'
import Landing from './landing';
import { connect } from 'react-redux';
import Game from './game';
import { SHAPE_REQ } from '../config/constants';
import {store} from '../config/store';
import exit from './assets/exit.wav';

const globalStyle = {
  display: "flex",
  justifyContent: "center"
}



const shapeRequest = (roomIndex, rooms) => {
  socket.emit(SHAPE_REQ, {i: roomIndex,
                          oldShapes: rooms[roomIndex].shapes})
}

const App = ({actualRoom, rooms, index, playing}) => {
  if (actualRoom != -1) {
    if(index > (rooms[actualRoom].shapes.length-5)) {
      shapeRequest(actualRoom, rooms)
    }
  }
  
  return (
      <div style={globalStyle} >
        {
          actualRoom != -1 ? <Game/> : <Landing/>
        }
        <audio id={"exit"} src={exit} ></audio>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    actualRoom: state.actualRoom,
    rooms: state.rooms,
    index: state.shapeIndex,
    playing: state.playing
  }
}

export default connect(mapStateToProps)(App);