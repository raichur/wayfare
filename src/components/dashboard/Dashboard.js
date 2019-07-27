import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BillList from '../bills/BillList';


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h2>Austin</h2>
                <Link to='/add'>Add Bill</Link>
                <BillList />
            </div>
        )
    }
}

export default Dashboard;