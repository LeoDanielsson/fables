import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { openModal } from '../actions';
import Loader from './Loader.jsx';
import Listen from './Listen.jsx';

function Fable({ isFetching, fable, openModal }) {
    if(isFetching || !fable) {
        return <div className="fable-view"><Loader/></div>;
    }
    return (
      <div className="fable-view">
        <div className="topbar">
            <button
                onClick={() => browserHistory.push('/')}
                className="back-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            >
                &lt;&lt; Tillbaka till översikten
            </button>
        </div>
        <div className="mdl-shadow--2dp fable-description">
            <h3>{fable.name}</h3>
            <h4>{fable.artist.name}</h4>
            <p>Material: {fable.material}</p>
        </div>
        {fable.audio &&
          <div className="mdl-shadow--2dp fable-description">
            <Listen audio={fable.audio}/>
          </div>
        }
        <div className="mdl-shadow--2dp fable-description">
            <h4>Om konstnären</h4>
            <p>{fable.artist.description}</p>
        </div>
      </div>
    );
}

function findFable(fables, ownProps) {
  if(!fables.isFetching) {
    return fables.fables.find(fable => fable.id === ownProps.routeParams.fableId);
  }
}

function mapStateToProps(state, ownProps) {
  return { isFetching: state.fables.isFetching, fable: findFable(state.fables, ownProps) };
}

export default connect(mapStateToProps, { openModal })(Fable);
