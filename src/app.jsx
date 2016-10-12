import styles from './index.scss';
import React from 'react';

const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    <Recipe recipe={ recipes[0] } />
    <Recipe recipe={ recipes[1] } />
  </ul>
);

const recipes = ['Waffles', 'Omelette'];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> list of names ! </h1>
        <Recipes recipes={ recipes } />
      </div>
    )
  }
}