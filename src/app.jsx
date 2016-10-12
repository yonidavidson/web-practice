import styles from './index.scss';
import React from 'react';

import Name from './components/name.jsx';
import Names from './components/names.jsx';
import AddName from './components/addName.jsx';

const names = ['Andrew G', 'Eyal K', 'Yoni D'];

export default class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      names: names
    }  
  }
  
  render() {
    return (
      <div style={ divStyle }>
        <h1> List of names: </h1>
        <AddName addName={ this.addName.bind(this) }/>
        <Names names={ this.state.names } />
      </div>
    )
  }

  addName(title){
    this.setState({names: this.state.names.concat(title)})
  }
}

const divStyle = {
  border: '1px solid green',
  'backgroundColor': 'lightblue'
};