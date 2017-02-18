import React from 'react';
import { connect } from 'react-redux'
import Loader from './Loader.jsx';
import FableCard from './FableCard.jsx';
import Footer from './Footer.jsx';

function getContent(isFetching, fables) {
  if(isFetching) {
    return <Loader/>
  }
  return fables
    .filter(fable => !fable.disabled)
    .sort((a, b) => a.prio - b.prio)
    .map(fable => <FableCard key={fable.id} fable={fable}/>);
}

function Overview({isFetching, fables}) {
  return <div className="overview">
    <div className="header">
      <h5>Välj en skulptur för att lyssna på dess fabel</h5>
    </div>
    <div className="card-list">
      {getContent(isFetching, fables)}
    </div>
    <Footer />
  </div>
}

function mapStateToProps(state) {
  return {
    isFetching: state.fables.isFetching,
    fables: state.fables.fables,
  }
}

export default connect(mapStateToProps)(Overview);
