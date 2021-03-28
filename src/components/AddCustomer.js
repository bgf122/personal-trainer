import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Form from './Form';


export default function AddCustomer(props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
    });

    const addCustomer = () => {
        fetch("https://customerrest.herokuapp.com/api/customers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => props.fetchData())
        .catch(err => console.log(err));
        
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                Add Customer
            </Button>
            <Form confirm="Add" 
                title="New customer"
                addCustomer={addCustomer} 
                customer={customer}
                open={open} 
                setOpen={setOpen}
                setCustomer={setCustomer}/>
        </div>
    )
}