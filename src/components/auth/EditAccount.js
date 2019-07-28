import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
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
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Edit account</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder={this.props.profile ? this.props.profile.firstName : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder={this.props.profile ? this.props.profile.lastName : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="income">Monthly Income</label>
                        <input type="number" id="income" placeholder={this.props.profile ? this.props.profile.income : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder={this.props.auth ? this.props.auth.email : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">New Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
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

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const bills = state.firestore.data.bills;
    const bill = bills ? bills[id] : null;
    const auth = state.firebase.auth;
    const profile = state.firebase.profile;
    state = ownProps.bill;
    return {
        bill, auth, profile
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        { collection: 'bills', where: [['userid', '==', props.auth.uid]], orderBy: [['cost', 'desc']] }
    ])
)(EditAccount);
