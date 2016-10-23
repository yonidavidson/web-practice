import React from 'react'
import {connect} from 'react-redux'
import {deleteName} from '../actions/names.jsx'

class RemoveName extends React.Component{
  render(){
    return(
        <button style={ {margin:'10px'} }  onClick={this.onClick.bind(this)}> remove </button>      
    )
  }

  onClick(e){
      this.props.deleteName(this.props.name)
  }
}

export default connect(null,{deleteName})(RemoveName)