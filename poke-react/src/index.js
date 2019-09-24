import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';

const BackgroundStyle = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(106deg, 
                rgba(0,0,0,1) 0%, 
                rgba(65,65,65,1) 46%, 
                rgba(171,171,171,1) 100%);
`


ReactDOM.render(
    <BackgroundStyle>
        <Router>
            <App/>
        </Router>
    </BackgroundStyle>, 
    document.getElementById('root')
);

