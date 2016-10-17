import React from 'react';

import RemoveButton from './removeButton.jsx'
import EditButton from './editButton.jsx'

const Name = ({ name }) => (
  	<li>
  		<span style={ {display: 'inline-block', width: '100px'}}>
  			{ name }
  		</span>
  		{[<EditButton/>, <RemoveButton/>]}
  	</li>
);

export default Name;