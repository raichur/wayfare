import React from 'react';
import { Link } from 'react-router-dom';

const BillSummary = () => {
    return (
        <tr>
            <td>Bill Name</td>
            <td className="cost">$30</td>
            <td>Bill description</td>
            <td>
                <Link to="/edit/1">Edit</Link>
                <Link to="/">Delete</Link>
            </td>
        </tr>
    )
}

export default BillSummary;