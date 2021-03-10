import React from 'react'
import VideoPlayer from 'react-video-js-player';
import eggshells from '../videos/demo1.mp4';
import '../App.css'

const EggshellsDemo = () => {
    return (
        <div>
            <VideoPlayer src={eggshells} width="1100" height="500" muted={true} loop={true} playing={true}  className="demo" />
        </div>
    )
}

export default EggshellsDemo
