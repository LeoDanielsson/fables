import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from './Loader.jsx';
import Grid from './Grid.jsx';
import Cell from './Cell.jsx';
import Listen from './Listen.jsx';

function Fable({isFetching, fable}) {
    if(isFetching || !fable) {
        return <Loader/>;
    }
    return (
      <div>
          <Grid>
              <Cell cols="12" className="topbar">
                  <button
                      onClick={() => browserHistory.push('/')}
                      className="back-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  >
                      &lt;&lt; Tillbaka till översikten
                  </button>
              </Cell>
          </Grid>
          <Grid>
              <Cell cols="12" className="mdl-shadow--2dp fable-description">
                  <h1>{fable.name}</h1>
                  <h1>
                      {fable.artist.name}
                  </h1>
                  <h4>Material: {fable.material}</h4>
              </Cell>
          </Grid>
          <Grid>
            <Cell cols="12" className="mdl-shadow--2dp fable-description">
              <Listen audio={fable.audio}/>
            </Cell>
          </Grid>
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
