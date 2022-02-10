import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button, Box } from '@mui/material';

export default function About() {
  return(
      <Container>

          <Typography variant='h5' align='center' style={{marginTop:'10px'}}>ABOUT</Typography>
            <Typography align="justify" style={{marginTop:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
               <Box textAlign="center">

                <Button variant="contained" style={{marginTop:'10px'}}>Meet our Team</Button>
               </Box>
      </Container>
     
  );
}
