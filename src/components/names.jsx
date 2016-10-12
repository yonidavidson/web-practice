import React from 'react';
import Recipe from './name.jsx';

const Names = ({ names }) => (
  <ul>
    {names.map(name => <Recipe key={name} name={name}/>)}
  </ul>
);

export default Names;