import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';

const BackgroundStyle = styled.div`
background: rgb(62,62,62);
background: linear-gradient(180deg, rgba(62,62,62,1) 0%, rgba(111,111,111,1) 50%, rgba(161,161,161,1) 100%);
`

ReactDOM.render(
    <BackgroundStyle>
        <Router>
            <App/>
        </Router>
    </BackgroundStyle>, 
    document.getElementById('root')
);

