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
  align-items: center;
  background: black;
  border-bottom: 3px solid #F9D31C;
  display: flex;
  font-size: 25px;
  height: 115px;
  justify-content: space-between;
  padding: 0 25px;
  position: -webkit-sticky;
  position: sticky;
  text-shadow: 3px 2px #3359A5;
  top: 0;
  z-index: 10;
`

const StyledFooter = styled.footer`
  align-items: center;
  background: black;
  border-top: 3px solid #F9D31C;
  display: flex;
  font-size: 25px;
  height: 115px;
  justify-content: space-between;
  text-shadow: 3px 2px #3359A5;
`

const StyledNavClick = styled.div`
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
    width: 200px;
    text-align: center;
    text-shadow: 1px 1px 1px black;
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
      }))
  }

  render () {
    return (
      <div className="App">
        <StyledNav className="App-navBar">
          <Link to="/">
            <StyledTcgLogo src={PokemonTcgLogo} alt="Logo"/>
          </Link>
          <Link to="/createPokeCard/">
            <StyledNavClick>
              {"Create New Card"}
            </StyledNavClick>
          </Link>
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
            exact
            render={props => <PokeCard {...props} {...this.state}/>}
          />
          <Route
            path="/pokeCard/:name/editPokeCard/"
            render={props => <EditPokeCard {...props} {...this.state}/>}
          />
        </main> 
        <StyledFooter></StyledFooter>
      </div>
    );
  }
}

export default App;
