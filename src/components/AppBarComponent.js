import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuComponent from './MenuComponent';
import{ Link } from 'react-router-dom';
import AddCustomer from './AddCustomer';

export default function AppBarComponent(props) {
    return (
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Button>
                        <Link to="/">
                            <HomeIcon style={{ color: "white"}} />
                        </Link>
                    </Button>
                    <Typography style={{flexGrow: 1}} variant="h6" >
                        Personal Trainer
                    </Typography>
                    <AddCustomer fetchData={props.fetchData}/>
                    <MenuComponent/>
                </Toolbar>    
            </Appbar>
        </div>
    )
}