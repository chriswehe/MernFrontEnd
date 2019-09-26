import store from './store'
import { createNewCard } from './actions/card'

store.subscribe(() => console.log(store.getState()))

store.dispatch(createNewCard('Pikachu', 56, "https://images.pokemontcg.io/base1/58.png", 'https://images.pokemontcg.io/base1/58_hires.png', "Pokémon", "Basic", 58, "Mitsuhiro Arita", "Common"))

// store.dispatch(deleteCard('Pikachu'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App/App';
// import { BrowserRouter as Router} from 'react-router-dom'
// import styled from 'styled-components';

// const BackgroundStyle = styled.div`
//     background-size: cover;
//     background: linear-gradient(180deg, 
//                 rgba(62,62,62,1) 0%, 
//                 rgba(111,111,111,1) 50%, 
//                 rgba(161,161,161,1) 100%);
//     min-height: 915px;
// `

// ReactDOM.render(
//     <BackgroundStyle>
//         <Router>
//             <App/>
//         </Router>
//     </BackgroundStyle>, 
//     document.getElementById('root')
// );

