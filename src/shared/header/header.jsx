import React, { Fragment } from 'react';
import './header.css';
// import logo from './logo.svg';


function Header() {
    return (
        <Fragment>
            <header>
                <h1>LOGO</h1>
                <nav>
                    <a href="">Link 1</a>
                    <a href="">Link 2</a>
                    <a href="">Link 3</a>
                    <a href="">Link 4</a>
                    <a href="">Link 5</a>
                </nav>
            </header>
        </Fragment>


    );  
}

export default Header;