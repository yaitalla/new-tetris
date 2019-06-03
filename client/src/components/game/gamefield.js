import React from 'react';
import { connect } from 'react-redux';
import { gamefield, imgstyle, rowstyle, emptybox } from './style';
import Gamedata from './gamedata';
import sq from './assets/sq.png';
import box from './assets/emptybox.png';

const Row = (row, i) => {
    return (
        <div key={i} style={rowstyle}>
            {row.map((block, i) => 
                block == 0 ? <img key={i} src={box} style={imgstyle}></img> :
                <img key={i} src={sq} style={imgstyle}></img>
            
            )}
        </div>
    )
}

const GameField = ({field, i}) => {
    return (
        <div style={gamefield}>
            {field.map((rows, i) => 
               Row(rows, i)
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        field: state.field,
        i: state.shapeIndex
    }
}

export default connect(mapStateToProps)(GameField);