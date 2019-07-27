import React from 'react';
import BillSummary from './BillSummary';

const BillList = () => {
    return (
        <ul class="bills">
            <BillSummary />
            <BillSummary />
            <BillSummary />
        </ul>
    )
}

export default BillList;