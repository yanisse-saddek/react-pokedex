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
      pokedata:[],
      pokedex:[],
      actif:'liste'
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
    axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20").then(resultat=>{   
      resultat.data.results.map(pokemon=>{
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(resultatPokemon=>{
          allPokemonData.push(resultatPokemon.data)
          pokemonsListArray.push(<AllPokemon  addPokedex={this.addToPokedex}onClick={this.activePokemon} pokemon={resultatPokemon.data}/>)
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
    this.state.PokemonData.map(pokemon=>{
      if(pokemon.name.startsWith(searchInput)){
        searchedPokemons.push(<AllPokemon  onClick={this.activePokemon} pokemon={pokemon} />)
      }
    })
    if(searchedPokemons.length == 0){
      searchedPokemons.push(<p>Aucun résultat</p>)
    }
    this.setState({
      pokemonsList:[],
      searchedPokemon: searchedPokemons
    })
  }
  addToPokedex = (pokemon)=>{
    var pokedexData = this.state.pokedex

    if(pokedexData.includes(pokemon)){
      console.log('ya deja')
    }else{
      pokedexData.push(pokemon)
    }
    this.setState({
      pokedex:pokedexData
    })

  }

  showPokedex = (val)=>{
    this.setState({
      actif:val
    })
  }
  render(){

    return(
      <div className="app">
        {this.state.activePokemon?<ActivePokemon activePokemon={this.state.activePokemon}/>:null}
        {this.state.actif=="liste"
            ?
          <div>
          <div className='searchbar'>
            <SearchBar func={this.searchPokemon}/>
          </div>
              <h1>Liste des pokémons</h1>
              <button onClick={()=>{this.showPokedex("pokedex")}}>Voir mon pokedex</button>
                <div className="pokemon-list">
                  {this.state.searchedPokemon}
                  {this.state.pokemonsList? this.state.pokemonsList: this.state.searchedPokemon}
                </div>
            </div>
              :
            <div className='pokedex'>
                <h1>Mon pokédex</h1>
                <button onClick={()=>{this.showPokedex("liste")}}>Voir la liste des pokémons</button>

                <div className="pokemon-list">
                  {this.state.pokedex.map(pokemon=>{return <AllPokemon  onClick={this.activePokemon}  pokemon={pokemon}/>})}              
                </div>
              </div>
          }
      </div>
    )
  }
}