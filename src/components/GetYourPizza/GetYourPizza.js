import { useState } from 'react';
import React from 'react'
import './GetYourPizza.scss';
import uuid from 'react-uuid';
import api from './../../api';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


function GetYourPizza(props) {
	const [style, setStyle] = useState('');
	const [crust, setCrust] = useState('');
    const [cheese, setCheese] = useState('No');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);
    const [saving, setSaving] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);
    

    const handlestyleChange = (event) => {
        setStyle(event.target.value);
    }
    const handlecrustChange = (event) => {
        setCrust(event.target.value);
        }  
    
    const handlecheeseChange = () => {
        setCheese("Yes");
        }        
    const handlenameChange = (event) => {
        setName(event.target.value);
        
        }
    const handleaddressChange = (event) => {
            setAddress(event.target.value);
        }        

    
    const handleSubmit = (event) => {
        event.preventDefault();

        	// Validate the state
		let errors = [];
		if (style === '') {
			errors.push('Enter style');
		}

		if (crust === '') {
			errors.push('Enter crust');
		}

		if (name === '') {
			errors.push('Enter your name');
		}

		if (address === '') {
			errors.push('Enter your address');
		}


		// Check for error
		if (errors.length > 0) {
			setErrorMessage(errors);
		}
            else {
                const newOrder = {
                    id: uuid(),
                    style: style,
                    crust: crust,
                    cheese: cheese,
                    name: name,
                    address: address,
                };

                setSaving(true);

                api.post('/orders', newOrder)
                .then((response) => {
                    if (response.status === 201) {
                        //props.addOrder(newOrder);

                setStyle('');
                setCrust('');
                setCheese('No');
                setName('');
                setAddress('');
                setErrorMessage(null);
                setSaving(false);
                setFormSubmited(true);
                setFormSubmited(true);
                } 
    });

        //props.addOrder(newOrder);
        }  
    }

        function renderSuccess() {
        return (
            <div className='success'>
                <strong>Success</strong>
                <p>Your order was submitted</p>
            </div>
        );
    }

        const override = css`
        display: block;
        margin: 0 auto;
        border-color: #e5a701;
`;

const renderForm = () => {
    

	return (
       

        <form  onSubmit={handleSubmit}>
           {errorMessage && (

<div className='error'>
    Please, verify the entered data:
    <ul>
        {errorMessage.map(
            (error, index) => (
                <li key={index}>{error}</li>
            )
        )}
    </ul>
</div>
)}

            <div className="field">
                <label>Style</label>
                <select value={style} onChange={handlestyleChange}>

                    <option>-Select-</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Pepperoni">Pepperoni</option>
                    <option value="Canadian">Canadian</option>
                    <option value="Supreme">Supreme</option>
                    <option value="Cheese">Cheese</option>
                    <option value="Margherita">Margherita</option>
                </select>
            </div>

            <div className="field">
                <label>Crust</label>
                <select value={crust} onChange={handlecrustChange}>
                    <option>-Select-</option>
                    <option value="Original Crust">Original Crust</option>
                    <option value="Thin Crust">Thin Crust</option>
                    <option value="Gluten-Free Crust">Gluten-Free Crust</option>
                </select>
            </div>

            <div className="field">

                <label>
                    <input 
                        type="checkbox"

                        onChange={handlecheeseChange} value={cheese}>

                    </input>
                    Add extra cheese
                </label>
            </div>

            <div className="field">
                <label>Name:</label>
                <input onChange={handlenameChange}
                    type='text'
                    maxLength={150}
                    value={name} />
            </div>
            <div className="field">
                <label>Address:</label>
                <input onChange={handleaddressChange}
                    type='text'
                    maxLength={150}
                    value={address} />
            </div>

           

            <button type='submit'>Order Now</button>

           

        </form> 
	    );
        
        
}

const renderSaving = () => {
    return (
        <div className="ClockLoader">
                    <ClipLoader color={"#ffffff"} loading={saving} css={override} size={150} />
                </div>
    );
}


if (formSubmited) {
    return renderSuccess();
}
else if (saving) {
    return renderSaving();
}
else {
    return renderForm();
}
    
}

export default GetYourPizza;
