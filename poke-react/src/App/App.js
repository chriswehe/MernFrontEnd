//Import Dependencies
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';
//Import Components 
import PokeCardList from '../PokeCardList/PokeCardList'
import PokeCard from '../PokeCard/PokeCard'
import CreatePokeCard from '../CreatePokeCard/CreatePokeCard'
import EditPokeCard from '../EditPokeCard/EditPokeCard'
//Import Assets
import PokemonTcgLogo from '../Assets/pokemonTcgLogo.png';

const StyledTcgLogo = styled.img`
  display: block;
  height: 100vh;
  max-height: 75px;
  width: auto;
`

const StyledNav = styled.nav`
  background: black;
  border: 7px solid #F9D31C;
  align-items: center;
  display: flex;
  height: 115px;
  font-size: 25px;
  justify-content: space-between;
  padding: 0 50px;
  text-shadow: 5px 2px #3359A5;
`

// const StyledFooter = styled.footer`
//   align-items: center;
//   color: white;
//   display: flex;
//   height: 100px;
//   font-size: 10px;
//   font-weight: lighter;
//   justify-content: space-around;
//   text-shadow: 2px 2px 4px #000000;
// `

const pokeURL = "https://kanto-unown-01999.herokuapp.com/";

class App extends Component {
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

  render () {
    return (
      <div className="App">
        <StyledNav className="App-navBar">
          <Link to="/">
            <StyledTcgLogo src={PokemonTcgLogo} alt="Logo"/>
          </Link>
          <Link to="/createPokeCard/">{"Create New Card"}</Link>
        </StyledNav>
        <main>
          <Route
            path="/createPokeCard/"
            render={props => <CreatePokeCard {...props}/>}
          />
          <Route
            path="/"
            exact
            render={props => <PokeCardList {...props} {...this.state}/>}
          />
          <Route 
            path="/pokeCard/:name"
            render={props => <PokeCard {...props} {...this.state}/>}
          />
          <Route
            path="/pokeCard/:name/editPokeCard/"
            render={props => <EditPokeCard {...props} {...this.state}/>}
          />
        </main> 
      </div>
    );
  }
}

export default App;
