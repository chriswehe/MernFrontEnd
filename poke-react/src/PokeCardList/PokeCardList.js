import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
`
const pokeURL = "https://kanto-unown-01999.herokuapp.com/";

export default class PokeCardList extends Component {
    constructor(props){
        super(props)
        this.state = {
          pokeCards: []
        }
    }

    componentDidMount() {
        fetch(pokeURL)
          .then( response => response.json()
          .then( (parsedJson) => {
            this.setState({
              pokeCards: parsedJson
            })
          }))
    }

    render() {
        const pokedexView = this.state.pokeCards.map((pokeCard, i) =>(
            <Link to={`/pokeCard/${pokeCard.name}`} key={i}>
                <StyledCardListImage src={pokeCard.imageUrlHiRes} alt={pokeCard.name}/>
            </Link>
        ))
        return (
            <StyledDiv>{pokedexView}</StyledDiv>
        )
    }
}
