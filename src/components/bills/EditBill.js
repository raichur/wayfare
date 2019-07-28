import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateBill } from '../../store/actions/billActions';

class EditBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleChange = (e) => {
        if (e.target.id === "cost") {
            this.setState({
                cost: Number(e.target.value)
            })
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateBill(this.state, this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Edit Bill</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder={this.props.bill ? this.props.bill.name : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <textarea rows="3" id="description" placeholder={this.props.bill ? this.props.bill.description : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="cost">Cost</label>
                        <input type="number" id="cost" placeholder={this.props.bill ? this.props.bill.cost : null} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="color">Color</label>
                        <input type="color" id="color" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Submit Changes</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBill: (bill, id) => dispatch(updateBill(bill ,id))
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const bills = state.firestore.data.bills;
    const bill = bills ? bills[id] : null;
    const auth = state.firebase.auth
    state = ownProps.bill;
    return {
        bill, auth
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        { collection: 'bills', where: [['userid', '==', props.auth.uid]], orderBy: [['cost', 'desc']] }
    ])
)(EditBill);