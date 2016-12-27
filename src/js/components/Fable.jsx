import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from './Loader.jsx';

function Fable({isFetching, fable}) {
    if(isFetching) {
        return <Loader/>;
    }
    return (
      <div>
          <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col topbar">
                  <button
                      onClick={() => browserHistory.push('/')}
                      className="back-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  >
                      &lt;&lt; Tillbaka till översikten
                  </button>
              </div>
          </div>
          <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp fable-description">
                  <h1>{fable.name}</h1>
                  <h1>
                      {fable.artist.name}
                  </h1>
                  <h4>Material: {fable.material}</h4>
              </div>
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
