import {  Toolbar, Typography, Button, Container, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import logo from './images/logo.jpg';



const useStyles = makeStyles((theme) => ({
   
  
tabs:{
    fontSize:'14px',
    [theme.breakpoints.down('sm')]: {
        fontSize:'8px',
      },
},
   
logo:{
width:'100px',
height:'100px',
[theme.breakpoints.down('sm')]: {
    width:'75px',
height:'75px',
  },
}
        
   
}));


function Header(){
    const classes = useStyles();
    return(




    <Toolbar  style={{justifyContent:'space-between', }}>
            
                <Button variant="text" style={{ }}>
                   <img className={classes.logo} src={logo} alt="logo" height={100} width={100}/>
                    </Button>
                <Button color="inherit" className={classes.tabs}>Services</Button>
                <Button color="inherit" className={classes.tabs}> Portfolio</Button>
                <Button color="inherit" className={classes.tabs}>Gallery</Button>
                <Button variant="outlined" className={classes.tabs}>Contact</Button>
    </Toolbar>



    );
}

export default Header;
