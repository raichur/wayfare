import React from 'react';

const EditBill = () => {
    return (
        <div>
            <label htmlFor="">Name</label>
            <input type="text"/>
            <label htmlFor="">Description</label>
            <input type="text"/>
            <label htmlFor="">Cost</label>
            <input type="number"/>
            <input type="submit"/>
        </div>
    )
}

export default EditBill;