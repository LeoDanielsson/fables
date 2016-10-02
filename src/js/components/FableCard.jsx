import React from 'react';

function FableCard({fable}) {
  const styling = {
    background: `url(${fable.imageUrl}) center / cover`
  }
  return <div className="js-card overview-card mdl-card mdl-shadow--2dp" style={styling}></div>
}


export default FableCard;
