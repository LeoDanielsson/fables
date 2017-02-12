import React from 'react';

class AudioPlayer extends React.Component {
  constructor() {
    this.state = { playing: false };
  }
  render() {
    <div>
      <audio
        className="audio-player mdl-button"
        src={this.props.src}
        autoPlay
      />
      <button className="play-button mdl-button mdl-button--raised" on>
        <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5v14l11-7z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>
    </div>
  }
}

export default AudioPlayer;
