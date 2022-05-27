import React from 'react'
import { logo } from '../../assets'; 
import { Grid, Typography } from '@mui/material';

import { styles } from './styles';

const Footer = () => {
  return (
    <div>
        <Grid container marginTop={10}>
            <Grid sx={{background:'#FDFD96'}} paddingTop={3} item xs={4} display='flex' alignItems='center' direction='column' minHeight='160px'>
                <img src={logo} alt="" />
            </Grid>
            <Grid sx={{background:'#FDFD96'}} paddingTop={3} item xs={4} display='flex' alignItems='center' direction='column' minHeight='160px'>
                <Typography gutterBottom>Quelques liens</Typography>
                <Typography gutterBottom>Acte de naissance</Typography>
                <Typography gutterBottom>Acte de mariage</Typography>
                <Typography gutterBottom>Acte de décès</Typography>
            </Grid>
            <Grid sx={{background:'#FDFD96'}} paddingTop={3} item xs={4} display='flex' alignItems='center' direction='column' minHeight='160px'>
                <Typography gutterBottom>Autres liens</Typography>
                <Typography gutterBottom>A propos de nous</Typography>
                <Typography gutterBottom>Foire Aux Questions</Typography>
                <Typography gutterBottom>Conditions Génerales d'Utilisation</Typography>
            </Grid>
            <Grid sx={{background:'#000'}} item xs={12} display='flex' justifyContent='center'>
                <Typography color='#fff'>Copyright &copy 2022. Tous droits réservés</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer