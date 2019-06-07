import React from 'react';
import { connect } from 'react-redux';
import UserList from './userlist';
import Button from './button';
import {game, title} from './style';
import Screen from './screen';
import lifecycle from 'react-pure-lifecycle';
import enter from '../assets/enter.wav';
import landed from './assets/landed.wav';
import move_sound from '../assets/shape_moving.wav';
import playsound from '../../config/misc/playSound';
import GameOver from './gameover';

const methods = {
    componentDidUpdate(props) {
        // console.log('updated', props)
    },
    componentDidMount(props) {
        // console.log('mounted', props)
          playsound("landing");
    },
    componentWillUpdate(props){
        // console.log('will update', props)
    },
    componentWillMount(props){
    //   console.log('will mount', props)
    },
    componentWillUnmount(props) {
        // console.log('will Unmount', props)
    }
}

const Game = ({actualRoom, rooms, gameOver}) => {
    return (
        <div style={game}>
            <p style={title}>GAME</p>
            <UserList/>
            <Button/>
            <Screen/>
            <audio id={"landing"} src={enter} ></audio>
            <audio id={"shape moving"} src={move_sound} ></audio>
            <audio id={"landed"} src={landed} ></audio>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actualRoom: state.actualRoom,
        rooms: state.rooms,
        gameOver: state.gameOver
    }
}

const GameConnector = lifecycle(methods)(Game)

// export default connect(mapStateToProps)(GameConnector);
export default connect(mapStateToProps)(Game);