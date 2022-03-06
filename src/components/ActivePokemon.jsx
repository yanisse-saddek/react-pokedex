import React from 'react'
import '../App.css'

export default class ActivePokemon extends React.Component{
    

    render(){
        console.log(this.props)
        return(
            <div className="pokemon-actif" id="top">
                <p class="close" onClick={()=>{this.props.remove()}}>x</p>
                <div className="left">
                    <img src={this.props.activePokemon.sprites.other.dream_world.front_default?this.props.activePokemon.sprites.other.dream_world.front_default:this.props.activePokemon.sprites.front_default} alt="" />
                </div>
                <div className="right">
                    <div className="pokeinfo">
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