import React from 'react';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks';
import LogoutLinks from './LogoutLinks';
import { connect } from 'react-redux';

const Nav = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <LoginLinks profile={profile}/> : <LogoutLinks/>
    return (
        <nav>
            <ul>
                <Link to='/' className="title"><span>Way</span>fare</Link>
                <div className="right">
                    {links}
                </div>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(
    mapStateToProps
)(Nav);