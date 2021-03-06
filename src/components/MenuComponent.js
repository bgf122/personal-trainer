import React, { useState } from 'react';
import{ Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const StyledMenu = withStyles({ paper: { border: '1px solid #d3d4d5' }})
((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        {...props}/>
));

const StyledMenuItem = withStyles((theme) => ({ 
    root: { '&:focus': { backgroundColor: theme.palette.primary.main, '& .MuiListItemIcon-root, & .MuiListItemText-primary': { color: theme.palette.common.white }}}}))(MenuItem);

export default function MenuComponent() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
            <div>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}>
                    <MenuIcon/>
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <StyledMenuItem>
                        <Link to="/">
                            <ListItemText primary="Customers"/>
                        </Link>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <Link to="/traininglist">
                            <ListItemText primary="Trainings"/>
                        </Link>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <Link to="/calendar">
                            <ListItemText primary="Calendar"/>
                        </Link>
                    </StyledMenuItem>
                </StyledMenu>
            </div>
    )
} 