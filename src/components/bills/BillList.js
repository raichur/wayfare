import React from 'react';
import BillSummary from './BillSummary';

const BillList = ({bills, currentcity, totalCost}) => {
    return (
        <table className="bills">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="cost">Cost</th>
                    <th>Description</th>
                    <th className="buttons">Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                { bills ? bills.map(bill => {
                    if (bill.cityid === currentcity) {
                        return (
                            <BillSummary bill={bill} key={bill.id} />
                        )
                    }
                    return null;
                }) : null}
                <tr className="totals">
                    <td><b>Total</b></td>
                    <td className="cost">${totalCost}</td>
                    <td></td>
                    <td className="buttons"></td>
                </tr>
            </tbody>
        </table>
    )
}

export default BillList;