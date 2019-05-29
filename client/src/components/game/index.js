import React from 'react';
import { connect } from 'react-redux';
import UserList from './userlist';
import Button from './button';
import {game, title} from './style';


const Game = ({actualRoom, rooms}) => {
    return (
        <div style={game}>
            <p style={title}>GAME</p>
            <UserList/>
            <Button/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actualRoom: state.actualRoom,
        rooms: state.rooms
    }
}

export default connect (mapStateToProps)(Game);