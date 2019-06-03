import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import accept from './assets/accept.wav';

const playsound = () => {
    const audio = document.getElementById("audio");
    audio.play();
}

const Soundbtn = () => {
    return (
        <div>
            <input type={"button"} value={"sound test"}  onClick={() => playsound()}/>
            <audio id={"audio"} src={accept} ></audio>
        </div>
    )
}

export default Soundbtn;