import React from 'react';
import {connect} from 'react-redux'

import Name from './name.jsx';

const Names = ({ names = [] }) => (
  <ul>
    {names.map(name => <Name key={name} name={name}/>)}
  </ul>
);

const mapStateToProps = (state = { names: [] }) => ({
	names : state.names
})


export default connect(mapStateToProps, null)(Names);