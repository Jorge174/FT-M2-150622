import React from 'react';

function Musico({ name, lastname, band }) {
  return (
    <div>
      <h1>{name} {lastname}, {band}</h1>      
    </div>
  )
};

export default Musico;