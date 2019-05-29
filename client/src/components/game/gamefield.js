import React from 'react';
import { connect } from 'react-redux';
import { gamefield } from './style';

const GameField = ({message}) => {
    return (
        <div style={gamefield}>
            {message}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps)(GameField);