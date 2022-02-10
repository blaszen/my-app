import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';

import logo from '../images/logo.jpg';
import { Box } from '@mui/system';


const useStyles = makeStyles((theme) => ({

    root: {
        minWidth:'100%' ,
        minHeight:'70vh' ,
        backgroundImage: `url("https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        justifyContent:'center',
        marginTop:'5px',

        [theme.breakpoints.down('sm')]: {
          backgroundSize:'contain'
        },
      },

   herotext:{
        padding:'200px',
        [theme.breakpoints.down('sm')]: {
          padding:'60px',
        },
   },
    
   heading:{
       fontSize:'64px',
       [theme.breakpoints.down('sm')]: {
        fontSize:'28px'
      },
      borderBottom: "2px solid lightgray",
      marginBottom:'5px'
   
   },

   subheading:{
     fontSize:'18px',
     [theme.breakpoints.down('sm')]: {
      fontSize:'14px'
    },
   },

   callbutton:{
     marginTop:'20px'
   }
    
  }));

export default function Hero() {
    const classes = useStyles();
  return (

  <Container className={classes.root}>
      <div className={classes.herotext}>
        <Typography className={classes.heading} align="center" color="#fff" >BlasConstructionCo</Typography>
        <Typography className={classes.subheading} align="center" color="#fff" >A San Diego Construction Company</Typography>
        <Box textAlign="center"> 
        <Button variant='outlined' color="inherit" className={classes.callbutton}>Schedule a call</Button>

        </Box>
      </div>

  </Container>
  
  
  );}
