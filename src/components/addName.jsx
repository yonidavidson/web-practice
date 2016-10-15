import React from 'react';
import {connect} from 'react-redux'

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
    this.props.addName(this.refs.title.value)
    this.refs.title.value = ''
  }
  
}

const mapDisptachToState = (disptach) =>({
  addName: (title) => disptach({type: 'ADD_NAME', title})
})

const buttonStyle ={
  'backgroundColor':'blue',
   color : 'white'
}

export default connect(null, mapDisptachToState)(AddName);