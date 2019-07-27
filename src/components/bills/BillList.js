import React from 'react';
import BillSummary from './BillSummary';

const BillList = () => {
    return (
        <table className="bills">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="cost">Cost</th>
                    <th>Description</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                <BillSummary />
                <BillSummary />
                <BillSummary />
            </tbody>
        </table>
    )
}

export default BillList;