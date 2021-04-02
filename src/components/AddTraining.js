import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';
import 'moment/locale/fi';


export default function AddTraining(props) {
    moment.locale('fi');
    const [date, setDate] = useState('');
    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        date: '', activity: '', duration: 0, customer: props.customer.data.links[0].href
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    }

    const handleDateChange = (event) => {
        let date = new Date(event.target.value);
        let dateString = date.toISOString();
        setDate(event.target.value)
        setTraining({...training, [event.target.name]: dateString})
    }

    const addTraining = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(res => props.fetchData())
        .catch(err => console.log(err));
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                Add Training
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Training for {props.customer.data.firstname + ' ' + props.customer.data.lastname}</DialogTitle>
                <DialogContent>
                    <TextField
                        type="datetime-local"
                        autoFocus
                        margin="dense"
                        name="date"
                        value={date}
                        onChange={event => handleDateChange(event)}
                        label="Date"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={event => handleInputChange(event)}
                        label="Duration"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={event => handleInputChange(event)}
                        label="Activity"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} streetaddress="primary">
                        Cancel
                    </Button>
                    <Button onClick={addTraining} streetaddress="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}