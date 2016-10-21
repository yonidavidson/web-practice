import React from 'react';
import {connect} from 'react-redux'
import {getNames} from '../actions/names.jsx'

import Name from './name.jsx';

class Names extends React.Component{
	componentDidMount() {
    	this.props.getNames();
  	}
	render(){
		return(
			<ul>
			{this.props.names.map(name => <Name key={name} name={name}/>)}
			</ul>
			)
	}
}

const mapStateToProps = (state = { names: [] }) => ({
	names : state.names
})


export default connect(mapStateToProps, {getNames})(Names);