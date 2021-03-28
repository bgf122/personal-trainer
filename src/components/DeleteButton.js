import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteButton(props) {
    var url = props.data.links[0].href;

    const [open, setOpen] = useState(false);

    const removeData = () => {
        if (props.data.duration === undefined) {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => props.fetchData())
            .catch(err => console.log(err));
            handleClose();
        } else {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => props.fetchDataTrainings())
            .catch(err => console.log(err));
            handleClose();
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <Button onClick={handleClickOpen} size="small" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', backgroundColor: 'red'}}>
                <DeleteIcon fontSize="small" style={{color: 'white'}}/>
            </Button>
            {props.data.duration === undefined ?
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the customer?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={removeData} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>:
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the training?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={removeData} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            }
       </div>
    )
}