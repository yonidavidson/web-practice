import React from 'react'
import {connect} from 'react-redux'

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
            <form>
            <input ref="title" type="text" placeholder={this.props.name}/>
            <button style={ buttonStyle }>apply</button>
            </form>:<span/>}
        </span>
    )
  }

  onClick(e){
  	console.log(this.state.edited)
    this.setState({edited: !this.state.edited})
  }
}

const buttonStyle ={
  'backgroundColor':'green',
   color : 'white'
}

export default EditName