import React from 'react';
import './Cover.css';
// import coverVideo from '../../Medio/coverVideo.mp4';

export default function Cover() {
    return (
        <div className="cover-container">
            {/* <video
                src={coverVideo}
                className="video"
                autoPlay
                loop
                muted
            ></video> */}
            <p className="video"></p>
            <h1>Luciano Ezequiel Diaz Ocampo</h1>
            <p>Full Stack Developer</p>
        </div>
    );
}
