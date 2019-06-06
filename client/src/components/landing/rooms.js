import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, userstyle, rowStyle, btn} from './style'
import Roombutton from './roombutton';
import socket from '../../config/socketConnect';
import enter from '../assets/enter.wav';
import playsound from '../../config/misc/playSound';

const enterRoom = (room) => {
    playsound("enter room");
    socket.emit('ENTER_ROOM', room)
}

const row = (room, i) => {
      return (
        <div key={i} style={rowStyle}>
            <input style={btn} type={"button"} value={room.name}  onClick={() => enterRoom(room)}/>
            <audio id={"enter room"} src={enter} ></audio>
        </div>
    )
}

const roomName = (roomList) => {
    return (
        <div>
            {
                roomList.map((room, i) => 
                    row(room, i)
                )
            }
        </div>
    )
}

const Rooms = ({rooms}) => {
    return (
        <div style={userstyle}>
        <Roombutton/>
            {

                rooms.length > 0 ?
                    roomName(rooms)
                    :
                    <h4>No rooms yet</h4>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
    }
}

export default connect(mapStateToProps)(Rooms);