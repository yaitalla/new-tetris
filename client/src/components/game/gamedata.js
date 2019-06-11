import React from 'react';
import { connect } from 'react-redux';
import {datastyle} from './style';
import sq from './assets/sq.png';
import emptybox from './assets/emptybox.png';
import { rowstyle, imgstyle, box } from './style';

const Row = (row, i) => {
    return (
        <div key={i} style={rowstyle}>
            {row.map((block, i) => 
                block == 0 ? <img key={i} src={emptybox} style={imgstyle}></img> :
                <img key={i} src={sq} style={imgstyle}></img>
            
            )}
        </div>
    )
}

const Gamedata = ({rooms, roomIndex, shapeIndex, score}) => {
    const room = rooms[roomIndex];
    const shape = room.shapes[shapeIndex+1].shape;
    return (
        <div style={datastyle}>
            <h3>Next Shape</h3>
            {
                shape.map((row, i) =>
                    Row(row, i)
                )
            }
            <hr/>
            <hr/>
            <hr/>
            <br/>
            <h3>Score: {score}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        roomIndex: state.actualRoom,
        shapeIndex: state.shapeIndex,
        score: state.score
    }
}

export default connect(mapStateToProps)(Gamedata);