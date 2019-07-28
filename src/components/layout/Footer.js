import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p className="left">Made by <a href="https://joshuaraichur.com">Joshua Raichur</a></p>
            <p className="right">
                <Link to='/faq'>FAQ</Link>
                <a href="https://github.com/raichur/wayfare">Source</a>
                </p>
        </footer>
    )
}

export default Footer;