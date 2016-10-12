import React from 'react';

class AddName extends React.Component{
  render(){
    return(
      <form onSubmit={ this.onSubmit.bind(this)}>
        <input ref="title" type="text" placeholder='First + Last name'/>
        <button>Add</button>
      </form>
    )  
  }

  onSubmit(e){
    e.preventDefault();
    this.props.addRecipe(this.refs.title.value)
    this.refs.title.value = ''
  }
  
}

export default AddName;