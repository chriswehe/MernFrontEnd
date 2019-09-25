import React, { Component } from 'react'
import styled from 'styled-components';

const StyledCardArticle = styled.article`
    background-color: black;
    border: 7px solid #F9D31C;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 100px;
    max-width: 700px;
    padding: 40px;
`

const StyledCardImage = styled.img`
    box-shadow: 10px 10px 5px darkgray;
    max-height: 500px;
    margin: 10px;
    text-decoration: none;
    width: auto;
`

const StyledInfoSection = styled.section`
    color: #F9D31C;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    justify-content: center;
    margin: 0 auto;
    text-shadow: 5px 1px 4px #3359A5;
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
                        <section>
                            <h2>{pokeCard.name}</h2>
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
