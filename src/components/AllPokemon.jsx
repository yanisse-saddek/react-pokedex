import React from 'react'
import axios from 'axios'

export default class AllPokemon extends React.Component{
  constructor(props){
    super(props)
  this.state={
     pokeImg:null,
     active:null
  }
  }



  render(){
    return(
      <div onClick={()=>{this.props.onClick(this.props.pokemon)}} className="pokemon">
        <img src={this.props.pokemon.sprites.front_default}/>
        <p>{this.props.pokemon.name}</p>
      </div>
    )
  }
}