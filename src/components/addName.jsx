import React from 'react';
import {connect} from 'react-redux'
import {postName} from '../actions/names.jsx'

class AddName extends React.Component{
  render(){
    return(
      <form onSubmit={ this.onSubmit.bind(this)}>
        <input ref="title" type="text" placeholder='First + Last name'/>
        <button style={ buttonStyle }>Add</button>
      </form>
    )  
  }

  onSubmit(e){
    e.preventDefault();
    this.refs.title.value === '' ? true : this.props.postName(this.refs.title.value)
    this.refs.title.value = ''
  }
  
}

const buttonStyle ={
  'backgroundColor':'blue',
   color : 'white'
}

export default connect(null, {postName})(AddName);