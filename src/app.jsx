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
      <div>
        <h1> list of names ! </h1>
        <form onSubmit={ this.onSubmit.bind(this)}>
          <input ref="title" type="text"/>
          <button>Add</button>
        </form>
        <Recipes recipes={ this.state.recipes } />
      </div>
    )
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({recipes: this.state.recipes.concat(this.refs.title.value)})
    this.refs.title.value = ''
  }
}