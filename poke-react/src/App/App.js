import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';
import PokeCardList from '../PokeCardList/PokeCardList'
import PokeCard from '../PokeCard/PokeCard'
import CreatePokeCard from '../CreatePokeCard/CreatePokeCard'
import PokemonTcgLogo from '../Assets/pokemonTcgLogo.png';

const StyledTcgLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

const StyledTcgLogo = styled.img`
  display: block;
  margin-top: 50px;
  max-height: 200px;
  width: auto;
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  height: 200px;
  font-size: 50px;
  justify-content: space-around;
  margin: 0 10%;
  text-shadow: 2px 2px 4px #000000;
`

const StyledFooter = styled.footer`
  align-items: center;
  color: white;
  display: flex;
  height: 100px;
  font-size: 10px;
  font-weight: lighter;
  justify-content: space-around;
  text-shadow: 2px 2px 4px #000000;
`

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
      })).then(console.log(this.state.pokeCards))
  }

  render () {
    return (
      <div className="App">
        <StyledTcgLogoContainer>
          <StyledTcgLogo src={PokemonTcgLogo} alt="Logo"/>
        </StyledTcgLogoContainer>
        <StyledNav className="App-navBar">
          <Link to="/">{"Pokemon Cards"}</Link>
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
        </main> 
        <StyledFooter>
          <h1>{"Created by Chris Wehe and George Caras"}</h1>
        </StyledFooter> 
      </div>
    );
  }
}

export default App;
