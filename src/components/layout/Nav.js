import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Netcome</Link>
                <LoginLinks />
                <LogoutLinks />
            </ul>
        </nav>
    )
}

export default Nav;