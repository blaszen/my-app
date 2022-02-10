import {  Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import logo from './images/logo.jpg';



const useStyles = makeStyles((theme) => ({
   
    tabs:{
        fontSize:'14px',
        [theme.breakpoints.down('sm')]: {
            fontSize:'8px'
          },
    },

    logo:{
       
        [theme.breakpoints.down('sm')]: {
            height:'75px',
        width:'75px',
          },
    }
   
  }));


function Header(){
    const classes = useStyles();
    return(
<Container maxWidth="lg">

    <Toolbar style={{justifyContent:'space-between',  }}>
            
                <Button variant="text" style={{ }}>
                   <img className={classes.logo} src={logo} alt="logo" height={150} width={150}/>
                    </Button>
                <Button color="inherit" className={classes.tabs} >Services</Button>
                <Button color="inherit" className={classes.tabs}> Portfolio</Button>
                <Button color="inherit" className={classes.tabs}>Gallery</Button>
                <Button variant="outlined" className={classes.tabs}>Contact</Button>
    </Toolbar>
</Container>

    );
}

export default Header;
