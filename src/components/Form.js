import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Form(props) {
    const handleInputChange = (event) => {
        props.setCustomer({...props.customer, [event.target.name]: event.target.value})
    }

    const handleClose = () => {
        props.setOpen(false);
    };

    const confirm = () => {
        props.addCustomer()
        handleClose();
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={props.customer.firstname}
                        onChange={event => handleInputChange(event)}
                        label="First Name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="lastname"
                        value={props.customer.lastname}
                        onChange={event => handleInputChange(event)}
                        label="Last name"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="streetaddress"
                        value={props.customer.streetaddress}
                        onChange={event => handleInputChange(event)}
                        label="Street Address"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="postcode"
                        value={props.customer.postcode}
                        onChange={event => handleInputChange(event)}
                        label="Postcode"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="city"
                        value={props.customer.city}
                        onChange={event => handleInputChange(event)}
                        label="City"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        value={props.customer.email}
                        onChange={event => handleInputChange(event)}
                        label="Email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        value={props.customer.phone}
                        onChange={event => handleInputChange(event)}
                        label="Phone"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} streetaddress="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirm} streetaddress="primary">
                        {props.confirm}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}