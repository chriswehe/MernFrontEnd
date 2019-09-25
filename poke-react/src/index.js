import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';

const BackgroundStyle = styled.div`
background: rgb(54,54,54);
background: linear-gradient(180deg, 
            rgba(54,54,54,1) 0%, 
            rgba(140,140,140,1) 23%, 
            rgba(224,224,224,1) 100%);
`

ReactDOM.render(
    <BackgroundStyle>
        <Router>
            <App/>
        </Router>
    </BackgroundStyle>, 
    document.getElementById('root')
);

