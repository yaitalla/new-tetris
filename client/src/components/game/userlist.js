import React from 'react';
import { connect } from 'react-redux';
import {userlist, soudiv, image, nonimage, userRow} from './style';
import controller from './assets/controller.png';


const UserList = ({actualRoom, id, rooms}) => {
    return (
        <div style={userlist}>
            {
                rooms[actualRoom].users.map((usr, i ) =>
                 
                 <div style={userRow}  key={i}>
                     <div style={soudiv}>
                         Player{i+1}
                         <img style={usr === id ? image : nonimage} src={controller}></img>
                     </div>
                 </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actualRoom: state.actualRoom,
        rooms: state.rooms,
        id: state.yourID
    }
}

export default connect (mapStateToProps)(UserList);