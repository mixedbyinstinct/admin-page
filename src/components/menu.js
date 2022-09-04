
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <Navbar bg="light" expand="lg">
        

        <Link to="/">
        <Navbar.Text>Songs</Navbar.Text>
        </Link>
        <Link to="/use">
        <Navbar.Text>Users</Navbar.Text>
        </Link>

        </Navbar>

    );

}


export default Menu;
