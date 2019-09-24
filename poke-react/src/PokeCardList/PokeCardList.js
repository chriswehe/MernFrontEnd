import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class PokeCardList extends Component {
    render() {
        const pokedexView = this.props.pokeCards.map((pokeCard, i) =>(
            <Link to={`/pokeCard/${pokeCard.name}`} key={i}>
                <img src={pokeCard.imageUrlHiRes} alt={pokeCard.name}/>
            </Link>
        ))
        return (
            <div>{pokedexView}</div>
        )
    }
}
