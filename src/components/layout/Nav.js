import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';
import { connect } from 'react-redux';

const Nav = (props) => {
    const { auth } = props;
    const links = auth.uid ? <LoginLinks/> : <LogoutLinks/>
    return (
        <nav>
            <ul>
                <Link to='/' className="title">Netcome</Link>
                <div className="right">
                    {links}
                </div>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(
    mapStateToProps
)(Nav);