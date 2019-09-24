import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';
import PokeCardList from '../PokeCardList/PokeCardList'
import PokeCard from '../PokeCard/PokeCard'
import CreatePokeCard from '../CreatePokeCard/CreatePokeCard'

const StyledNav = styled.nav`
  background-color: #4d4d4d;
  display: flex;
  height: 100px;
  font-size: 30px;
  justify-content: space-around;
  align-items: center;
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
        <StyledNav className="App-navBar">
          <Link to="/">{"Poke Cards"}</Link>
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
      </div>
    );
  }
}

export default App;
