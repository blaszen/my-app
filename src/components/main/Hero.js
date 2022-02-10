import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

import logo from '../images/logo.jpg';


const useStyles = makeStyles((theme) => ({

    root: {
        minWidth:'100%' ,
        minHeight:'70vh' ,
        backgroundImage: `url("https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        justifyContent:'center',
        marginTop:'5px'
      },

   herotext:{
        padding:'200px'
   },
    
   heading:{
       fontSize:'36px'
   }
    
  }));

export default function Hero() {
    const classes = useStyles();
  return (

  <Container className={classes.root}>
      <div className={classes.herotext}>
        <Typography className={classes.heading} align="center" >BlasConstructionCo</Typography>
        <Typography className={classes.subheading} align="center"  >A San Diego Construction Comapany</Typography>

      </div>

  </Container>
  
  
  );}
