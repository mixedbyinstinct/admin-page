
import React from 'react';
import ReactDOM from 'react-dom';
import Songs from './components/songs';
import Users from './components/users';
import Menu from './components/menu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
padding: 8px;
`;

const App = () => {

    return (
    <Container>
<Songs />
    <br />    
<Users />

</Container>
);

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
