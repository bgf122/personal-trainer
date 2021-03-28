import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';
import Form from './Form';

export default function EditButton(props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: props.data.firstname, 
        lastname: props.data.lastname, 
        streetaddress: props.data.streetaddress,  
        postcode: props.data.postcode, 
        city: props.data.city, 
        email: props.data.email, 
        phone: props.data.phone
    });

    const editCustomer = () => {
        fetch(props.data.links[0].href, {
            method: 'PUT',
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

    return(
        <div>
            <Button onClick={handleClickOpen} size="small" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', backgroundColor: 'green'}}>
                <EditIcon fontSize="small" style={{color: 'white'}}/>
                </Button>
                <Form confirm="Save" 
                title="Edit customer"
                addCustomer={editCustomer} 
                customer={customer}
                open={open} 
                setOpen={setOpen}
                setCustomer={setCustomer}/>
            </div>
            
    )
}