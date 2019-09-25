import React, { Component } from 'react'

const pokeURL = "https://kanto-unown-01999.herokuapp.com/";
//We should have the url in App.js and this url come from
//the same source

export default class CreatePokeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            nationalPokedexNumber: null,
            imageUrl: '',
            imageUrlHiRes: '',
            types: [],
            supertype: '',
            subtype: '',
            number: '',
            artist: '',
            rarity: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitCard = this.submitCard.bind(this)
    }

    handleValueChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({
            [name]: value
        })
    }

    submitCard() {
        console.log("submit")
        fetch(pokeURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
        .catch(err => console.log(err));
}

    render() {
        return (
            <div>
                <h1>Create New Pokémon Card</h1>
                <form>
                    <input 
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleValueChange}
                    />
                    <input 
                    name="nationalPokedexNumber"
                    type="number"
                    placeholder="Pokedex Number"
                    value={this.state.nationalPokedexNumber}
                    onChange={this.handleValueChange}
                    />
                    <input 
                    name="imageUrl"
                    type="text"
                    placeholder="Image URL"
                    value={this.state.imageUrl}
                    onChange={this.handleValueChange}
                    />
                    <input 
                    name="imageUrlHiRes"
                    type="text"
                    placeholder="High Resolution Image URL"
                    value={this.state.imageUrlHiRes}
                    onChange={this.handleValueChange}
                    />
                    {/* <input 
                    name="types"
                    type=""
                    placeholder="Types"
                    value={this.state.types}
                    onChange={this.handleValueChange}
                    /> */}
                    <input 
                    name="supertype"
                    type="text"
                    placeholder="Card Supertype"
                    value={this.state.supertype}
                    onChange={this.handleValueChange}
                    />
                    <input 
                    name="subtype"
                    type="text"
                    placeholder="Subtype"
                    value={this.state.subtype}
                    onChange={this.handleValueChange}
                    />
                     <input 
                    name="number"
                    type="text"
                    placeholder="Card Number"
                    value={this.state.number}
                    onChange={this.handleValueChange}
                    />
                     <input 
                    name="artist"
                    type="text"
                    placeholder="Artist Name"
                    value={this.state.artist}
                    onChange={this.handleValueChange}
                    />
                    <input 
                    name="rarity"
                    type="text"
                    placeholder="Card Rarity"
                    value={this.state.rarity}
                    onChange={this.handleValueChange}
                    />
                    <button
                        onClick={this.submitCard}
                    >Submit Card</button>
                </form>
            </div>
        )
    }
}
