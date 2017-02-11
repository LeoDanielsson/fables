import React from 'react';

function Grid({cols, className, children}) {
  return <div className={`mdl-cell mdl-cell--${cols ? cols : 6}-col ${className}`}>{children}</div>
}

export default Grid;
