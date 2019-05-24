import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, userstyle} from './style'

const Rooms = ({rooms}) => {
    return (
        <div>
            {
                rooms !== undefined ?
                    rooms.map((user, i) => <h4 key={i}>PLAYER{i+1}</h4>)
                    :
                    <h4>No rooms yet</h4>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
    }
}

export default connect(mapStateToProps)(Rooms);