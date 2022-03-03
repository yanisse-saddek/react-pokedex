import React from 'react'

export default class SearchBar extends React.Component{
    render(){
        return(
                <input onChange={(e)=>{this.props.func(e.target.value)}}/>
        )
    }
}