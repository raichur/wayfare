import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateBill } from '../../store/actions/billActions';

class EditBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e.target.value);
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateBill(this.state);
    }

    render() {
        return (
            <div>
                <h2>Edit Bill {this.props.match.params.id}</h2>
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
                        <input type="number" step=".01" id="cost" placeholder={this.props.bill ? this.props.bill.cost : null} onChange={this.handleChange}/>
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
        updateBill: (bill) => dispatch(updateBill(bill))
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const bills = state.firestore.data.bills;
    const bill = bills ? bills[id] : null;
    state = ownProps.bill;
    return {
        bill: bill
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'bills' }
    ])
)(EditBill);