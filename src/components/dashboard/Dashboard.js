import React, { Component } from 'react';
import BillList from '../bills/BillList';

class Dashboard extends Component {
    render() {
        return (
            <div class="dashboard">
                <h1>Austin</h1>
                <BillList />
            </div>
        )
    }
}

export default Dashboard;