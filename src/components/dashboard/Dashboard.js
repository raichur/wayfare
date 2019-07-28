import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BillList from '../bills/BillList';
import CityList from '../cities/CityList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { bills, cities, auth, profile } = this.props;
        let discretionary = 0, positive = true;
        
        if (!auth.uid) {
            return <Redirect to='/login' />
        }

        /*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
        Array.prototype.sum = function (prop) {
            var total = 0
            for ( var i = 0, _len = this.length; i < _len; i++ ) {
                if (this[i].cityid === profile.currentcity) {
                    total += Number(this[i][prop])
                }
            }
            return total
        }
        
        if (bills && profile) {
            discretionary = profile.income - bills.sum('cost')
            if (discretionary <= 100) {
                positive = false;
            }
        }
        

        return (
            <div className="dashboard">
                <h1 className="net">You have <span className={positive ? "positive" : "negative"}>${discretionary ? discretionary : null}</span> safe to spend</h1>
                <div className="controls">
                    <CityList cities={cities} userid={auth.uid} currentcity={profile.currentcity} />
                    <Link to='/add' className="addBill">+ Add Bill</Link>
                </div>
                <BillList bills={bills} currentcity={profile.currentcity}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.firestore.ordered.bills,
        cities: state.firestore.ordered.cities,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        { collection: 'bills', where: [['userid', '==', props.auth.uid]], orderBy: [['cost', 'desc']]},
        { collection: 'cities', where: [['userid', '==', props.auth.uid]]}
    ])
)(Dashboard);