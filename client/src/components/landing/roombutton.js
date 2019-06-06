import React from 'react';
import { form } from './style';
import socket from '../../config/socketConnect';
import click from '../assets/click_btn.wav';
import playsound from '../../config/misc/playSound';

const Roombutton = () => {
   // socket.on('ROOM_SENT', (data) => {
    
    let input
    return (
            <form style={form}
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    playsound("create room")
                    socket.emit('CREATE_ROOM', input.value)
                    input.value = ''
                }}
            >
                <input placeholder="enter room's name" ref={node => (input = node)} />
                <button /*style={btn}*/ type="submit">Add room</button>
                <audio id={"create room"} src={click} ></audio>

            </form>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.yourID
    }
}


export default Roombutton;