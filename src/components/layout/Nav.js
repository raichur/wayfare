import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';
import { connect } from 'react-redux';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to='/' className="title">Netcome</Link>
                <div className="right">
                    <LogoutLinks />
                    <LoginLinks />
                </div>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(
    mapStateToProps
)(Nav);