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
    <FableCard key={fable.id} fable={fable}/>
  );
}

function Overview({isFetching, fables}) {
  return <div className="overview">
    {getContent(isFetching, fables)}
  </div>
}

function mapStateToProps(state) {
  return {
    isFetching: state.fables.isFetching,
    fables: state.fables.fables,
  }
}

export default connect(mapStateToProps)(Overview);
