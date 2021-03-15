import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

export default function AppBar() {
    return (
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Button>
                        <HomeIcon style={{ color: "white"}} />
                    </Button>
                    <Typography style={{flexGrow: 1}} variant="h6" >
                        Personal Trainer
                    </Typography>
                    <Button>
                        <MenuIcon style={{ color: "white"}} />
                    </Button>
                </Toolbar>    
            </Appbar>
        </div>
    )
}