import React from 'react'
import axios from 'axios'

export default class AllPokemon extends React.Component{
  render(){
    return(
      <div onClick={()=>{this.props.onClick(this.props.pokemon)}} className="pokemon">
        <a href="#top">
        <img src={this.props.pokemon.sprites.front_default}/>
        <p>{this.props.pokemon.name}</p>
        </a>
      </div>
    )
  }
}