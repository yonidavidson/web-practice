import styles from './index.scss';
import React from 'react';

import Recipe from './components/recipe.jsx';
import Recipes from './components/recipes.jsx';
import AddName from './components/addName.jsx';

const recipes = ['Andrew G', 'Eyal K', 'Yoni D'];

export default class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      recipes: recipes
    }  
  }
  
  render() {
    return (
      <div style={ divStyle }>
        <h1> List of names: </h1>
        <AddName addRecipe={ this.addRecipe.bind(this) }/>
        <Recipes recipes={ this.state.recipes } />
      </div>
    )
  }

  addRecipe(title){
    this.setState({recipes: this.state.recipes.concat(title)})
  }
}

const divStyle = {
  border: '1px solid green',
  'background-color': 'lightblue'
};