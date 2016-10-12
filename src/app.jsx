import styles from './index.scss';
import React from 'react';

const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    {recipes.map(recipe => <Recipe key={recipe} recipe={recipe}/>)}
  </ul>
);

const recipes = ['Andrew G', 'Eyal K'];

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