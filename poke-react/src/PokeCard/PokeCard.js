import React, { Component } from 'react'
import styled from 'styled-components';

const StyledCardArticle = styled.article`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
`

const StyledCardImage = styled.img`
    box-shadow: 10px 10px 5px grey;
    max-height: 500px;
    margin: 10px;
    text-decoration: none;
    width: auto;
`

const StyledInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

const StyledInfoKeys = styled.span`
    font-weight: bolder;
`

export default class PokeCard extends Component {
    render() {
        const pokeName = this.props.match.params.name;
        const pokeCard = this.props.pokeCards.find(pokeCard => pokeCard.name === pokeName);

        return (
            <div className="Card">
                <StyledCardArticle>
                    <StyledCardImage src={pokeCard.imageUrlHiRes} alt={pokeCard.name}/>
                    <StyledInfoSection>
                        <h2>{pokeCard.name}</h2>
                        <section>
                            <p><StyledInfoKeys>{"Number: "}</StyledInfoKeys>{pokeCard.number}</p>
                            <p><StyledInfoKeys>{"Type: "}</StyledInfoKeys>{pokeCard.supertype}</p>
                            <p><StyledInfoKeys>{"Rarity: "}</StyledInfoKeys>{pokeCard.rarity}</p>
                            <p><StyledInfoKeys>{"Artist: "}</StyledInfoKeys>{pokeCard.artist}</p>
                        </section>
                    </StyledInfoSection>
                </StyledCardArticle>
            </div>
        )
    }
}
