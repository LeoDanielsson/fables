import React from 'react';
import { connect } from 'react-redux'
import Loader from './Loader.jsx';

function Fable({isFetching, fable}) {
  if(isFetching) {
    return <Loader/>;
  }
  return <div>{ fable.name }</div>
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
