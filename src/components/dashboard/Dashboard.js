import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BillList from '../bills/BillList';
import { connect } from 'react-redux';


class Dashboard extends Component {
    render() {
        const { bills } = this.props;
        return (
            <div className="dashboard">
                <h1 className="net">You have <span>$7000</span> safe to spend</h1>
                <div className="controls">
                    <h2>Austin</h2>
                    <Link to='/add'>Add Bill</Link>
                </div>
                <BillList bills={bills}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bill.bills
    }
}

export default connect(mapStateToProps)(Dashboard);