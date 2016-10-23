import React from 'react'
import {connect} from 'react-redux'
import {changeName} from '../actions/names.jsx'

class EditName extends React.Component{
  constructor(){
    super()
    this.state = {edited : false}
  }
  render(){
    return(
        <span>
          <button style={ {margin:'10px'} }  onClick={this.onClick.bind(this)}> edit </button>
          {this.state.edited ?
            <form onSubmit={ this.onSubmit.bind(this)}>
            <input ref="title" type="text" placeholder={this.props.name}/>
            <button style={ buttonStyle }>apply</button>
            </form>:<span/>}
        </span>
    )
  }

  onClick(e){
    this.setState({edited: !this.state.edited})
  }

  onSubmit(e){
    e.preventDefault()
    this.refs.title.value === '' ? true : this.props.changeName({oldN: this.props.name, newN:this.refs.title.value})
    this.refs.title.value = ''
    this.onClick(null)
  }
}

const buttonStyle ={
  'backgroundColor':'green',
   color : 'white'
}

export default connect(null, {changeName})(EditName)