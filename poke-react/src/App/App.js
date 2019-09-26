//Import Dependencies
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';
//Import Components 
import PokeCardList from '../PokeCardList/PokeCardList'
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

class App extends Component {

  render () {
    return (
      <div className="App">
        <StyledNav className="App-navBar">
            <StyledTcgLogo src={PokemonTcgLogo} alt="Logo"/>
        </StyledNav>
        <main>
          <PokeCardList/>
        </main> 
        <StyledFooter></StyledFooter>
      </div>
    );
  }
}

export default App;
