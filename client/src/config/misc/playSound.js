const playsound = (soundID) => {
    const audio = document.getElementById(soundID);
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, soundID == "landing" ? 900 : 200)
}

export default playsound;