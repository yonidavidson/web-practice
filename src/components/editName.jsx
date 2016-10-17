import React from 'react'
import {connect} from 'react-redux'

class EditName extends React.Component{
  constructor(){
    super()
    this.state = {edited : false}
  }
  render(){
    return(
        <button style={ {margin:'10px'} }  onClick={this.onClick.bind(this)}> edit </button>      
    )
  }

  onClick(e){
  	console.log(this.state.edited)
    this.setState({edited: !this.state.edited})
  }
}


export default EditName