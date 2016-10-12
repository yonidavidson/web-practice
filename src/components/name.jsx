import React from 'react';

const Name = ({ name }) => (
  	<li>
  		<span style={ {display: 'inline-block', width: '100px'}}>
  			{ name }
  		</span>
  		{ buttons.map(b => <button key={b} style={ {margin:'10px'} }> {b} </button> ) }
  	</li>
);

const buttons = ['edit', 'remove']

export default Name;