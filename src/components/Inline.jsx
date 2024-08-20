import React from 'react';

const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 className = 'error'>Error</h1>
      <h2 style = {heading}>Inline Styles</h2>
    </div>
  )
}

export default Inline;
