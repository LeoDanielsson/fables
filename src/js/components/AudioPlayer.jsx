import React from 'react';
import ReactDOM from 'react-dom';

class AudioPlayer extends React.Component {
  play() {
    const audio = ReactDOM.findDOMNode(this);
    audio.play();
  }
  componentDidMount() {
    this.play();
  }
  componentDidUpdate() {
     this.play();
  }
  render() {
      return <audio
        className="audio-player"
        src={this.props.src}
        controls
      />
  }
}

export default AudioPlayer;
