import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    /* border: 7px solid #F9D31C; */
    border-top: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
`

const StyledCardListImage = styled.img`
    box-shadow: 10px 10px 5px black;
    max-height: 300px;
    margin: 10px;
    text-decoration: none;
    width: auto;
    
    &:hover{
        transform:scale(1.07);
        z-index:1;
    }
`
export default class PokeCardList extends Component {
    render() {
        // const pokedexView = this.state.pokeCards.map((pokeCard, i) =>())
        return (
            // <StyledDiv>{pokedexView}</StyledDiv>
            <StyledCardListImage 
                    src={''} 
                    alt={''}
                />
        )
    }
}
