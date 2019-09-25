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
    max-width: 800px;
    padding: 20px;
`

const StyledCardImage = styled.img`
    box-shadow: 10px 10px 5px #3359A5;
    max-height: 500px;
    margin: 10px;
    text-decoration: none;
    width: auto;
`

const StyledInfoSection = styled.section`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    text-shadow: 5px 1px 4px #3359A5;
    text-align: center;
`

const StyledInfoKeys = styled.span`
    color: #F9D31C;
    font-weight: bolder;
`

const StyledChangeKeys = styled.section`
    background: rgb(161,161,161);
    background: linear-gradient(180deg, 
                rgba(161,161,161,1) 0%, 
                rgba(225,21,43,1) 0%, 
                rgba(149,22,33,1) 53%);
    border: 4px solid #262952;
    color: white;
    font-weight: bolder;
    margin: 10px;
    padding: 3px;
    width: 250px;
    text-align: center;
    text-shadow: 1px 1px 1px black;
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
                            <p><StyledInfoKeys>{"Name: "}</StyledInfoKeys>{pokeCard.name}</p>
                            <p><StyledInfoKeys>{"Number: "}</StyledInfoKeys>{pokeCard.number}</p>
                            <p><StyledInfoKeys>{"Type: "}</StyledInfoKeys>{pokeCard.supertype}</p>
                            <p><StyledInfoKeys>{"Rarity: "}</StyledInfoKeys>{pokeCard.rarity}</p>
                            <p><StyledInfoKeys>{"Artist: "}</StyledInfoKeys>{pokeCard.artist}</p>
                        </section>
                        <Link to="/">
                            <StyledChangeKeys onClick={this.deleteCard}>Delete Card</StyledChangeKeys>
                        </Link>
                        <Link to={"/pokeCard/"+pokeCard.name+"/editPokeCard/"}>
                            <StyledChangeKeys>Edit Card</StyledChangeKeys>
                        </Link>
                    </StyledInfoSection>
                </StyledCardArticle>
            </div>
        )
    }
}