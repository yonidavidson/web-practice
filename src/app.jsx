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

class AddName extends React.Component{
  render(){
    return(
      <form onSubmit={ this.onSubmit.bind(this)}>
        <input ref="title" type="text" placeholder='First + Last name'/>
        <button>Add</button>
      </form>
    )  
  }

  onSubmit(e){
    e.preventDefault();
    this.props.addRecipe(this.refs.title.value)
    this.refs.title.value = ''
  }
  
}

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