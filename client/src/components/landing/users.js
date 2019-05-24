import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, userstyle} from './style'

const Users = ({usr, id}) => {
    return (
        <div style={userstyle}>
            <h5>you are player{usr.indexOf(id)+1}</h5>
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