import React, { Component } from 'react'

export default class PokeCard extends Component {
    render() {
        const pokeName = this.props.match.params.name;
        const pokeCard = this.props.pokeCards.find(pokeCard => pokeCard.name === pokeName);

        return (
            <div>
                <img src={pokeCard.imageUrlHiRes} alt={pokeCard.name}/>
                <h2>{pokeCard.name}</h2>
            </div>
        )
    }
}
