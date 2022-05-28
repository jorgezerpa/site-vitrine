import React from 'react'

import { partnersTwo } from '../../assets';
import { logo } from '../../assets';

import { FaqAccordion } from '../../components';

import { Box, Grid, Typography, Button, TextField } from '@mui/material';

const Faq = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Box>
        <Typography color='secondary' sx={{backgroundColor: '#147D07'}}  padding={10} variant='h6'>Foire aux questions</Typography>
      </Box>

      <Grid container padding={3} minHeight='600px'>
        <Grid sx={{backgroundImage:`url(${partnersTwo})`, backgroundPosition: 'right-top', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} item xs={12} sm={6} padding={5}>
      </Grid>
        
        <Grid textAlign='center' item xs={12} sm={6}>
            <FaqAccordion />
        </Grid>
      </Grid>

      <Box sx={{backgroundColor: '#147D07', display: 'flex', justifyContent:'space-evenly'}}  padding={10}>
        <Typography color='secondary' variant='h6'>Vous avez besoin de faire établir un acte d'état civil?</Typography>
        <Button variant='contained' color='secondary'>FAIRE UNE DÉCLARATION</Button>
      </Box>
    </div>
  )
}

export default Faq