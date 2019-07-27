import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BillList from '../bills/BillList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { bills, cities, auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        return (
            <div className="dashboard">
                <h1 className="net">You have <span>$7000</span> safe to spend</h1>
                <div className="controls">
                    {cities && cities.map(city => {
                    return (
                        <h2 key={city.id}>{city.name}</h2>
                    )
                })}
                    <Link to='/'>+ Add City</Link>
                    <Link to='/add'>+ Add Bill</Link>
                </div>
                <BillList bills={bills}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.firestore.ordered.bills,
        cities: state.city.cities,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bills', where: [['cityid', '==', 1]], orderBy: [['cost', 'desc']]}
    ])
)(Dashboard);