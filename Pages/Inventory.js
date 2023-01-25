function Inventory () {

import React, { useState } from 'react'

// import ReactDOM from 'react-dom'

function Inventory () {

    const [Input, updateForm] = React.useState(initialData)

    const handleChange = (e) => {
        updateForm({
            ...Input,
            [e.target.name]: e.target.value.trim()
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Input);
    };

    return (
        <>
        <p className="directions">
        Use the form below to update your inventory. Update 1 item at a time and check the console to view your updates.
            </p>

        {/* item 1 */}
        <label className="label1">
            Item
            <input name="Item" className="the-item" onChange={handleChange} />
            </label>
            <br />

            <label className="label2">
                Quantity
                <input name="Quantity" className="the-quantity" onChange={handleChange} />
            </label>
            <br />

        </>

    )
}

const initialData = Object.freeze({
    Item: "",
    Quantity: ""
})

export default Inventory;
