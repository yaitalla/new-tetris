import React from 'react'
import { connect } from 'react-redux';
import { mainWrap, title, infoWrap} from './style'
import Users from './users';
import Rooms from './rooms';
import lifecycle from 'react-pure-lifecycle';
import playsound from '../../config/misc/playSound';

const methods = {
    componentDidUpdate(props) {
        // console.log('updated', props)
    },
    componentDidMount(props) {
        // console.log('mounted', props)
        if (props.rooms.length > 0) {
           playsound("exit");
        }
    },
    componentWillUpdate(props){
        // console.log('will update', props)
    },
    componentWillMount(props){
      // console.log('will mount', props)
    },
    componentWillUnmount(props) {
        // console.log('will Unmount', props)
    }
}

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

const Landing = ({rooms}) => {
  return (
      <div style={mainWrap}> 
        <Title />
        <Infos />
      </div>
    )
}
const mapStateToProps = (state) => {
  return {
      rooms: state.rooms
  }
}
const LandingConnector = lifecycle(methods)(Landing)

export default connect(mapStateToProps)(LandingConnector);