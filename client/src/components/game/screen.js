import React from 'react';
import GameField from './gamefield';
import Gamedata from './gamedata';
import {screenstyle} from './style';
import { connect } from 'react-redux';
import down from '../../actions/down';
import fall from '../../config/misc/fall';
import { store } from '../../config/store';
import GameOver from './gameover';

const drop = (playing) => {
    let id = setInterval(() => {
      fall().then((value) => {
          if (value == true) {
            store.dispatch(down())
          }
      });
    }, 500);
    if (playing == false) {
      clearInterval(id)
    }
}

const Screen = ({playing, gameOver}) => {
    drop(playing);
    return (
        <div style ={screenstyle}>
        {
            gameOver == true ? <GameOver/> : <GameField />
        }
        {
            gameOver == true ? null : <Gamedata />
        }
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
        gameOver: state.gameOver
    }
}

export default connect(mapStateToProps)(Screen);