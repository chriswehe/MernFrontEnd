import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
    padding: 10px;
    text-shadow: 5px 1px 4px #3359A5;
    text-align: center;
`

const StyledInfoKeys = styled.span`
    font-weight: bolder;
`


const pokeURL = "https://kanto-unown-01999.herokuapp.com/";

export default class PokeCard extends Component {
    constructor(props){
        super(props)
        this.state = {
          pokeCard: {}
        }
        this.deleteCard = this.deleteCard.bind(this)
    }

    componentDidMount() {
        fetch(pokeURL + this.props.match.params.name)
          .then( response => response.json()
          .then( (parsedJson) => {
            this.setState({
              pokeCard: parsedJson
            })
          }))
    }
    
    deleteCard() {
        fetch(pokeURL + this.props.match.params.name, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "kanto-unown-01999.herokuapp.com"
            },
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
        const pokeCard = this.state.pokeCard;

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
                        <Link to="/">
                            <StyledInfoKeys onClick={this.deleteCard}>Delete Card</StyledInfoKeys>
                        </Link>
                        <Link to={"/pokeCard/"+pokeCard.name+"/editPokeCard/"}>
                            <StyledInfoKeys>Edit Pokémon</StyledInfoKeys>
                        </Link>
                    </StyledInfoSection>
                </StyledCardArticle>
            </div>
        )
    }
}