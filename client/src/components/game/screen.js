import React from 'react';
import GameField from './gamefield';
import Gamedata from './gamedata';
import {screenstyle} from './style';

const Screen = () =>
{
    return (
        <div style ={screenstyle}>
            <GameField />
            <Gamedata />
        </div>
        
    )
}

export default Screen;