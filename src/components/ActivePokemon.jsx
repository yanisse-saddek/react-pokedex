import React from 'react'
import '../App.css'

export default class ActivePokemon extends React.Component{
    

    render(){
        console.log(this.props.activePokemon)

        return(
            <div class="pokemon-actif">
                <div class="left">
                    <img src={this.props.activePokemon.sprites.front_default} alt="" />
                </div>
                <div class="right">
                    <div class="pokeinfo">
                    <p>Name: {this.props.activePokemon.name}</p>
                    <p>Height: {this.props.activePokemon.height}</p>
                    <p>Weight: {this.props.activePokemon.weight}</p>
                    <p>Type: {this.props.activePokemon.types.map(type=>{
                            return type.type.name+ " "
                        })
                    }</p>
                    </div>
                </div>
            </div>
        )
    }
}