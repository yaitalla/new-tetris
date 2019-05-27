import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, userstyle} from './style'
import Roombutton from './roombutton';


const Rooms = ({rooms}) => {
    return (
        <div style={userstyle}>
        <Roombutton/>
            {

                rooms.length > 0 ?
                    rooms.map((room, i) => <h4 key={i}>{room.name}</h4>)
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