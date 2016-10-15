import styles from './index.scss';
import React from 'react';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Name from './components/name.jsx';
import Names from './components/names.jsx';
import AddName from './components/addName.jsx';


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
    console.log(state)
    return Object.assign({}, state, { names: state.names.concat(action.title) } )
  }
}

const initialState = {
  names: ['Andrew G', 'Eyal K', 'Yoni D']
}

const store = createStore(reducer, initialState)

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