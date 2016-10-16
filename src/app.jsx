import styles from './index.scss';
import React from 'react';

import {Provider} from 'react-redux'

import Names from './components/names.jsx';
import AddName from './components/addName.jsx';
import store from './store/store.jsx'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={ divStyle }>
          <h1> List of names: </h1>
          <AddName/>
          <Names/>
        </div>
      </Provider>
    )
  }
}

const divStyle = {
  border: '1px solid green',
  'backgroundColor': 'lightblue'
};