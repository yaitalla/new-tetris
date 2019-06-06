import React from 'react';
import { connect } from 'react-redux';
import accept from './assets/accept.wav';
import playsound from '../../config/misc/playSound';
// const playsound = () => {
//     const audio = document.getElementById("audio test");
//     audio.play();
// }

const Soundbtn = () => {
    return (
        <div>
            <input type={"button"} value={"sound test"}  onClick={() => playsound("audio test")}/>
            <audio id={"audio test"} src={accept} ></audio>
        </div>
    )
}

export default Soundbtn;