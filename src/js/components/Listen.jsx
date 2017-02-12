import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
import { selectLanguage } from '../actions';

function Listen({ audio, languages, selectedLanguage, onSelectLanguage }) {
  if(!audio || !languages) {
    return null;
  }
  return (<div className="listen">
    <h4>Välj språk för att lyssna på fabeln</h4>
    {
      Object.keys(audio).map(languageId =>
        <button
          key={languageId}
          className={`mdl-button mdl-button--raised language-button ${languageId === selectedLanguage ? 'mdl-button--colored' : ''}`}
          onClick={() => onSelectLanguage(languageId)}>
            {languages[languageId]}
        </button>
      )
    }
    { selectedLanguage &&
      <div>
        <audio
          className="audio-player"
          src={audio[selectedLanguage]}
          autoPlay
          controls
        />
      </div>
    }
  </div>);
}

function mapStateToProps(state) {
  return {
    languages: state.languages.languages,
    selectedLanguage: state.languages.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectLanguage: languageId => {
      dispatch(selectLanguage(languageId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Listen);
