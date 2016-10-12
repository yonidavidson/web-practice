import React from 'react';

const Recipe = ({ recipe }) => (
  	<li>
  		<span style={ {display: 'inline-block', width: '100px'}}>
  			{ recipe }
  		</span>
  		{ buttons.map(b => <button style={ {margin:'10px'} }> {b} </button> ) }
  	</li>
);

const buttons = ['edit', 'remove']

export default Recipe;