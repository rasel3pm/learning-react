import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return ( <div className='header'>
        <img src={logo} alt="" />

        <nav>
            <a href="/about">About</a>
            <a href="./service">Services</a>
            <a href="./prouct">Products</a>
            <a href="./prouct">Contact</a>
        </nav>

        </div>
    );
};

export default Header;