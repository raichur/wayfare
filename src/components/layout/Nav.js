import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/' className="title">Netcome</Link>
                <div className="right">
                    <LoginLinks />
                    <LogoutLinks />
                </div>
            </ul>
        </nav>
    )
}

export default Nav;