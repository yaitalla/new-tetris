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

const Gamedata = ({rooms, roomIndex, shapeIndex}) => {
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        roomIndex: state.actualRoom,
        shapeIndex: state.shapeIndex
    }
}

export default connect(mapStateToProps)(Gamedata);