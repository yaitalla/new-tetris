import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, infoWrap} from './style'
import Users from './users';
import Rooms from './rooms';

const Title = () => {
    return (
        <div style={title}> 
          <h1>TETRIS</h1>
        </div>
      )
  }


const Infos = () => {
    return (
        <div style={infoWrap}> 
          <Users/>
          <Rooms/>
        </div>
      )
  }

const Landing = () => {
  return (
      <div style={mainWrap}> 
        <Title />
        <Infos />
      </div>
    )
}


export default Landing;