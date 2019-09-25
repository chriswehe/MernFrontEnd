import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 7px solid #F9D31C;
    border-top: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
`

const StyledCardListImage = styled.img`
    box-shadow: 10px 10px 5px black;
    max-height: 400px;
    margin: 10px;
    text-decoration: none;
    width: auto;
`

export default class PokeCardList extends Component {
    render() {
        const pokedexView = this.props.pokeCards.map((pokeCard, i) =>(
            <Link to={`/pokeCard/${pokeCard.name}`} key={i}>
                <StyledCardListImage src={pokeCard.imageUrlHiRes} alt={pokeCard.name}/>
            </Link>
        ))
        return (
            <StyledDiv>{pokedexView}</StyledDiv>
        )
    }
}
