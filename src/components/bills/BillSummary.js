import React from 'react';
import { Link } from 'react-router-dom';

const BillSummary = ({bill}) => {
    return (
        <tr>
            <td>{bill.name}</td>
            <td className="cost">${bill.cost}</td>
            <td>{bill.description}</td>
            <td>
                <Link to="/edit/1">Edit</Link>
                <Link to="/">Delete</Link>
            </td>
        </tr>
    )
}

export default BillSummary;