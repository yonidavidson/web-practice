import React from 'react';

import RemoveName from './removeName.jsx'
import EditName from './editName.jsx'

const Name = ({ name }) => (
  	<li>
  		<span style={ {display: 'inline-block', width: '100px'}}>
  			{ name }
  		</span>
  		<EditName name={name}/>
  		<RemoveName name={name}/>
  	</li>
);

export default Name;