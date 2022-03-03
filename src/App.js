import React from 'react'
import AllPokemon from './components/AllPokemon'
import axios from 'axios'
import ActivePokemon from './components/ActivePokemon'
import SearchBar from './components/SearchBar'
import './App.css'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pokemonsList: null,
      pokedata:[]
    }
  }


  activePokemon = (pokemonActive)=>{    
    this.setState({
      activePokemon:pokemonActive,
    })
  }




  componentDidMount = ()=>{
    var pokemonsListArray =[]
    var allPokemonData = []
    axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000").then(resultat=>{   
      resultat.data.results.map(pokemon=>{
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(resultatPokemon=>{
          allPokemonData.push(resultatPokemon.data)
          pokemonsListArray.push(<AllPokemon onClick={this.activePokemon} pokemon={resultatPokemon.data}/>)
          setTimeout(() => {
            this.setState({
              pokemonsList:pokemonsListArray,
            })
          }, 300);
          })
        })
        
    }) 
    this.setState({
      PokemonData:allPokemonData
    })
  }

  searchPokemon = (searchInput) => {
    var searchedPokemons = []
    console.log(this.state.PokemonData)
    this.state.PokemonData.map(pokemon=>{
      if(pokemon.name.startsWith(searchInput)){
        searchedPokemons.push(<AllPokemon onClick={this.activePokemon} pokemon={pokemon} />)
        console.log(pokemon)
      }
    })
    this.setState({
      pokemonsList:[],
      searchedPokemon: searchedPokemons
    })
    console.log(this.state.searchedPokemon)

  }



  render(){
    return(
      <div className="app">
          {this.state.activePokemon?<ActivePokemon activePokemon={this.state.activePokemon}/>:null}
          <div className='searchbar'>
            <SearchBar func={this.searchPokemon}/>
          </div>
        <div className="pokemon-list">
          {this.state.searchedPokemon}
          {this.state.pokemonsList? this.state.pokemonsList: this.state.searchedPokemon}
        </div>
      </div>
    )
  }
}