import React from 'react';
import BillSummary from './BillSummary';

const BillList = () => {
    return (
        <ul className="bills">
            <BillSummary />
            <BillSummary />
            <BillSummary />
        </ul>
    )
}

export default BillList;