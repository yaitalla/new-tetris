import React from 'react';
import {connect} from 'react-redux';
import {PAUSE, START} from '../../config/constants';
import socket from '../../config/socketConnect';

const PauseButton = (playing, actualRoom, rooms, index, yourID, field) => {
    if (yourID == rooms[actualRoom].owner) {
        if (index == -1) {
            socket.emit(START, {room: rooms[actualRoom], index: -1})
        } else {
            socket.emit(PAUSE, {playing, room: rooms[actualRoom].name, grid: field, roomobj: rooms[actualRoom]})
        }
    }
}

const Button = ({playing, field, rooms, actualRoom, yourID, shapeIndex}) => {
    return (
        <div>
            <button onClick={() => PauseButton(playing, actualRoom, rooms,  shapeIndex,yourID, field)}>{playing == true ? "Pause" : "Play"}</button>
            <button>Exit</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
        rooms: state.rooms,
        actualRoom: state.actualRoom,
        yourID: state.yourID,
        shapeIndex: state.shapeIndex,
        field: state.field
    }
}

export default connect(mapStateToProps)(Button);