import React from 'react'
import AllPokemon from './components/AllPokemon'
import axios from 'axios'
import ActivePokemon from './components/ActivePokemon'
import './App.css'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pokemonsList: null,
    }
  }


  activePokemon = (pokemonActive)=>{    
    this.setState({
      activePokemon:pokemonActive
    })
  }




  componentDidMount = ()=>{
    var pokemonsListArray =[]
    
    axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100").then(resultat=>{   
      resultat.data.results.map(pokemon=>{
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(resultatPokemon=>{
          pokemonsListArray.push(<AllPokemon onClick={this.activePokemon} pokemon={resultatPokemon.data}/>)
          setTimeout(() => {
            this.setState({
              pokemonsList:pokemonsListArray
            })
          }, 300);
          })
        })
        
    }) 
  }



  render(){
    return(
      <div className="app">
          {this.state.activePokemon?<ActivePokemon activePokemon={this.state.activePokemon}/>:null}
        <div className="pokemon-list">
          {this.state.pokemonsList}
        </div>
      </div>
    )
  }
}