import React from 'react';
import art from '../../config/misc/gameoverArt';
import { gameover, rowstyle, imgstyle } from './style';
import sq from './assets/sq.png'
import emptybox from './assets/emptybox.png';
// import ReactDelayRender from 'react-delay-render';

const Row = ({row, i}) => {
    return (
        <div key={i} style={rowstyle}>
            {
                row.map((block, i) => 
                    block == 0 ?    <img key={i} src={emptybox} style={imgstyle}></img> :
                                    <img key={i} src={sq} style={imgstyle}></img>
                )
            }
        </div>
    )
}

// const GameoverRow = ReactDelayRender({ delay: 200 })(GameoverRow);

const GameOver = () => {
    return (
        
        <div style={gameover}>
            {
                art.game.map((row, i) => 
                <Row key={i} row={row} i={i} />//Row(row, i)
                )
            }
            {<Row row={art.game[0]} i={33} />/*Row(art.game[0], 33)*/}
            {
                art.over.map((row, i) => 
                <Row key={i} row={row} i={i} />//Row(row, i)
                )
            }
        </div>
    )
}

export default GameOver;