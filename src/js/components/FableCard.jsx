import React from 'react';
import { browserHistory } from 'react-router'

function FableCard({fable}) {
  const styling = {
    background: `url(${fable.imageUrl}) center / cover`
  }

  function onClick() {
    browserHistory.push(`/fable/${fable.id}`);
  }
  return <div className="js-card overview-card mdl-card mdl-shadow--2dp" onClick={onClick} style={styling}></div>
}


export default FableCard;
