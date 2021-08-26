import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (ev) => {
        setInputValue(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (inputValue.trim().length > 2) {
            props.setCategories( cats => [inputValue,...cats]);
            setInputValue("")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value = {inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}
