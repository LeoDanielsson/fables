import React from 'react';
import { connect } from 'react-redux';
import { selectLanguage } from '../actions';
import AudioPlayer from './AudioPlayer';

function Listen({ audio, languages, selectedLanguage, selectLanguage }) {
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
          onClick={() => selectLanguage(languageId)}>
            {languages[languageId]}
        </button>
      )
    }
    { selectedLanguage &&
        <AudioPlayer src={audio[selectedLanguage]}/>
    }
  </div>);
}

function mapStateToProps(state) {
  return {
    languages: state.languages.languages,
    selectedLanguage: state.languages.selected
  };
}

export default connect(mapStateToProps, {selectLanguage})(Listen);
