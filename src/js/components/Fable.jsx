import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from './Loader.jsx';
import Grid from './Grid.jsx';
import Cell from './Cell.jsx';
import Listen from './Listen.jsx';

function Fable({isFetching, fable}) {
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
            <h2>{fable.name}</h2>
            <h2>
                {fable.artist.name}
            </h2>
            <h4>Material: {fable.material}</h4>
        </div>
        <div className="mdl-shadow--2dp fable-description">
          <Listen audio={fable.audio}/>
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

export default connect(mapStateToProps)(Fable);
