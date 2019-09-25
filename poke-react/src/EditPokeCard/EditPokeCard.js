import React, { Component } from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyledEditArticle = styled.article`
    background-color: black;
    border: 7px solid #F9D31C;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 100px;
    max-width: 700px;
    padding: 40px;
`

const StyledHeader = styled.h1`
    color: #F9D31C;
    background: black;
    align-items: center;
    display: flex;
    font-size: 30px;
    justify-content: space-between;
    padding: 0 50px;
    text-align: center;
    text-shadow: 5px 2px #3359A5;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`

const StyledInput = styled.input`
    margin: 10px;
`

const StyledUpdateClick = styled.div`
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

const pokeURL = "https://kanto-unown-01999.herokuapp.com/";

export default class EditPokeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            nationalPokedexNumber: '',
            imageUrl: '',
            imageUrlHiRes: '',
            supertype: '',
            subtype: '',
            number: '',
            artist: '',
            rarity: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.updateCard = this.updateCard.bind(this)
    }

    componentDidMount() {
        fetch(pokeURL + this.props.match.params.name)
          .then( response => response.json()
          .then( (parsedJson) => {
            this.setState({
              ...parsedJson
            })
          }))
    }

    handleValueChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({
            [name]: value
        })
    }

    updateCard(evt) {
        evt.preventDefault()
        fetch(pokeURL + this.props.match.params.name, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Host": "kanto-unown-01999.herokuapp.com",
                "Connection": "keep-alive"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <StyledEditArticle>
                    <StyledHeader>Update Card</StyledHeader>
                    <StyledForm>
                        <StyledInput 
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="nationalPokedexNumber"
                        type="number"
                        placeholder="Pokedex Number"
                        value={this.state.nationalPokedexNumber}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="imageUrl"
                        type="text"
                        placeholder="Image URL"
                        value={this.state.imageUrl}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="imageUrlHiRes"
                        type="text"
                        placeholder="High Resolution Image URL"
                        value={this.state.imageUrlHiRes}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="supertype"
                        type="text"
                        placeholder="Card Supertype"
                        value={this.state.supertype}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="subtype"
                        type="text"
                        placeholder="Subtype"
                        value={this.state.subtype}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="number"
                        type="text"
                        placeholder="Card Number"
                        value={this.state.number}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="artist"
                        type="text"
                        placeholder="Artist Name"
                        value={this.state.artist}
                        onChange={this.handleValueChange}
                        />
                        <StyledInput 
                        name="rarity"
                        type="text"
                        placeholder="Card Rarity"
                        value={this.state.rarity}
                        onChange={this.handleValueChange}
                        />
                        <Link to={"/pokeCard/"+this.state.name}>
                            <StyledUpdateClick onClick={this.updateCard}>
                                Submit
                            </StyledUpdateClick>
                        </Link>
                    </StyledForm>
                </StyledEditArticle>    
            </div>
        )
    }
}
