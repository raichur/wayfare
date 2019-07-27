import React from 'react';

const EditBill = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div className="input">
                <label htmlFor="name">Name {id}</label>
                <input type="text" id="name"/>
            </div>
            <div className="input">
                <label htmlFor="description">Description</label>
                <input type="text" id="description"/>
            </div>
            <div className="input">
                <label htmlFor="cost">Cost</label>
                <input type="number" id="cost"/>
            </div>
            <button type="submit">Submit Changes</button>
        </div>
    )
}

export default EditBill;