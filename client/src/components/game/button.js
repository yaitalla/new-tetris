import React from 'react';
import {connect} from 'react-redux';
import {PAUSE} from '../../config/constants';
import socket from '../../config/socketConnect';

const PauseButton = (playing, actualRoom, rooms, yourID) => {
    if (yourID == rooms[actualRoom].owner) {
        socket.emit(PAUSE, {playing, room: rooms[actualRoom].name})
    }
}

const Button = ({playing, rooms, actualRoom, yourID}) => {
    return (
        <div>
            <button onClick={() => PauseButton(playing, actualRoom, rooms, yourID)}>{playing == true ? "Pause" : "Play"}</button>
            <button>Exit</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
        rooms: state.rooms,
        actualRoom: state.actualRoom,
        yourID: state.yourID
    }
}

export default connect(mapStateToProps)(Button);