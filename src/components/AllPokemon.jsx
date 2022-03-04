import React from 'react'
import axios from 'axios'

export default class AllPokemon extends React.Component{
  render(){
    return(
      <div className="pokemon">
        <div onClick={()=>{this.props.onClick(this.props.pokemon)}}>
          <a href="#top">
          <img src={this.props.pokemon.sprites.front_default}/>
          <p>{this.props.pokemon.name}</p>
          </a>
        </div>
        {this.props.addPokedex
          ?
          <button className="add-pokemon" onClick={()=>{this.props.addPokedex(this.props.pokemon)}}>Ajouter ce pokemon au pokédex</button>
          :
          <button className="remove-pokemon" onClick={()=>{
            this.props.removePokedex(this.props.pokemon)}}>Retirer ce pokemon du pokédex</button>
        }
      </div>

    )
  }
}