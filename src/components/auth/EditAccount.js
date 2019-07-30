import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { editAccount } from '../../store/actions/authActions';

class EditAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.profile.firstName,
            lastName: this.props.profile.lastName
        }
    }

    handleChange = (e) => {
        if (e.target.id === "income") {
            this.setState({
                income: Number(e.target.value)
            })
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editAccount(this.state, this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        const { auth, profile } = this.props;
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Edit account</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder={profile ? profile.firstName : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder={profile ? profile.lastName : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="income">Monthly Income ($)</label>
                        <input type="number" id="income" placeholder={profile ? profile.income : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input disabled">
                        <label htmlFor="email">Email</label>
                        <input disabled type="email" id="email" placeholder={auth ? auth.email : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input disabled">
                        <label htmlFor="password">Password</label>
                        <input disabled type="password" id="password" placeholder="********" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editAccount: (account) => dispatch(editAccount(account))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
