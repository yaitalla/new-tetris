import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, userstyle, rowStyle, btn} from './style'
import Roombutton from './roombutton';
import socket from '../../config/socketConnect';

const enterRoom = (room) => {
    socket.emit('ENTER_ROOM', room)
}

const row = (room, i) => {
      return (
        <div key={i} style={rowStyle}>
            <button onClick={() => enterRoom(room)} style={btn}>{room.name}</button>
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