import React from 'react';
import { connect } from 'react-redux'
import Loader from './Loader.jsx';
import FableCard from './FableCard.jsx'
import Grid from './Grid.jsx';
import Cell from './Cell.jsx';

function getContent(isFetching, fables) {
  if(isFetching) {
    return <Loader/>
  }
  return fables.map(fable =>
    <Cell key={fable.id}>
      <FableCard fable={fable}/>
    </Cell>
  );
}

function Overview({isFetching, fables}) {
  return <Grid>
    {getContent(isFetching, fables)}
  </Grid>
}

function mapStateToProps(state) {
  return {
    isFetching: state.fables.isFetching,
    fables: state.fables.fables,
  }
}

export default connect(mapStateToProps)(Overview);
