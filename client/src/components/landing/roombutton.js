import React from 'react';
import { form } from './style';
import socket from '../../config/socketConnect';

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
                    socket.emit('CREATE_ROOM', input.value)
                    input.value = ''
                }}
            >
                <input placeholder="enter room's name" ref={node => (input = node)} />
                <button /*style={btn}*/ type="submit">Add room</button>
            </form>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.yourID
    }
}


export default Roombutton;