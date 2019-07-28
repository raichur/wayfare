import React from 'react';
import BillSummary from './BillSummary';

const BillList = ({bills, currentcity}) => {
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
                { bills && bills.map(bill => {
                    if (bill.cityid === currentcity) {
                        return (
                            <BillSummary bill={bill} key={bill.id} />
                        )
                    }
                })}
            </tbody>
        </table>
    )
}

export default BillList;