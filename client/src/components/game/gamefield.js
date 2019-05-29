import React from 'react';
import { connect } from 'react-redux';

const GameField = ({message}) => {
    return (
        <div>
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