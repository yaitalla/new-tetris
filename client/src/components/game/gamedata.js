import React from 'react';
import { connect } from 'react-redux';
import {datastyle} from './style';
import sq from './assets/sq.png';
import { rowstyle, imgstyle, box } from './style';

const Row = (row, i) => {
    return (
        <div key={i} style={rowstyle}>
            {row.map((block, i) => 
                block == 0 ? null :
                <img key={i} src={sq} style={imgstyle}></img>
            
            )}
        </div>
    )
}

const Gamedata = ({room, shapeIndex}) => {
    const shape = room.shapes[shapeIndex+1].shape
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
        room: state.rooms[state.actualRoom],
        shapeIndex: state.shapeIndex
    }
}

export default connect(mapStateToProps)(Gamedata);