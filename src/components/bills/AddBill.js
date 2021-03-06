import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { createBill } from '../../store/actions/billActions';

class AddBill extends Component {
    state = {
        cityid: 0,
        name: '',
        description: '',
        cost: 0,
        color: '#000000'
    }

    handleChange = (e) => {
        if (e.target.id === "cost") {
            this.setState({
                cost: Number(e.target.value),
                cityid: this.props.profile.currentcity
            })
        } else {
            this.setState({
                [e.target.id]: e.target.value,
                cityid: this.props.profile.currentcity
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBill(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Add Bill</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required maxLength="30" placeholder="Rent" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" maxLength="140" placeholder="2 bedroom place in downtown Austin" rows="3" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="cost">Cost ($ per month)</label>
                        <input type="number" required id="cost" placeholder="1400" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="color">Color</label>
                        <input type="color" id="color" onChange={this.handleChange}/>
                    </div>
                    <div className="addBillButtonContainer">
                        <button className="addBill" type="submit">Add Bill</button>
                        <Link to='/' className="cancelBill">Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBill: (bill) => dispatch(createBill(bill))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBill);
