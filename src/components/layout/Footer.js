import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p className="left">Made by <a href="https://joshuaraichur.com">Joshua Raichur</a></p>
            <p className="right">
                <NavLink to='/faq'>FAQ</NavLink>
                <a href="https://github.com/raichur/wayfare">Source</a>
                </p>
        </footer>
    )
}

export default Footer;