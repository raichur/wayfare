import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBill } from '../../store/actions/billActions';


class BillSummary extends Component {

    deleteBillListener = (e) => {
        this.props.deleteBill(e.target);
    }

    render() {
        return (
            <tr>
                <td><span className="colorId" style={{background: this.props.bill.color}}></span>{this.props.bill.name}</td>
                <td className="cost">${this.props.bill.cost}</td>
                <td>{this.props.bill.description}</td>
                <td className="buttons">
                    <Link to={'/edit/' + this.props.bill.id} key={this.props.bill.id}>Edit</Link>
                    <Link to='/' id={this.props.bill.id} onClick={this.deleteBillListener}>Delete</Link>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBill: (bill) => dispatch(deleteBill(bill))
    }
}

export default connect(null, mapDispatchToProps)(BillSummary);