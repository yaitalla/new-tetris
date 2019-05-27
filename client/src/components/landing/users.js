import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, userstyle} from './style'

const Users = ({usr, id}) => {
    console.log(usr.indexOf(id))
    return (
        <div style={userstyle}>
            <h6>you are player{usr.indexOf(id)+1}</h6>
            <h5>List of Players</h5>
            {
                usr.map((user, i) => <h4 key={i}>PLAYER{i+1}</h4>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usr: state.users,
        id: state.yourID
    }
}

export default connect(mapStateToProps)(Users);

