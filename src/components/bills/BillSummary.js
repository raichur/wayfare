import React from 'react';
import { Link } from 'react-router-dom';

const BillSummary = () => {
    return (
        <li>
            <h2>Bill Name</h2>
            <p>Bill description</p>
            <p>$30</p>
            <Link to="/">Edit</Link>
            <Link to="/">Delete</Link>
        </li>
    )
}

export default BillSummary;