import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BillList from '../bills/BillList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { bills, cities, auth, profile } = this.props;
        let discretionary = 0;

        Array.prototype.sum = function (prop) {
            var total = 0
            for ( var i = 0, _len = this.length; i < _len; i++ ) {
                total += Number(this[i][prop])
            }
            return total
        }
        
        if (bills && profile) {
            discretionary = profile.income - bills.sum('cost')
        }
        
        if (!auth.uid) {
            return <Redirect to='/login' />
        }

        return (
            <div className="dashboard">
                <h1 className="net">You have <span>${discretionary ? discretionary : null}</span> safe to spend</h1>
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
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bills', where: [['cityid', '==', 1]], orderBy: [['cost', 'desc']]}
    ])
)(Dashboard);