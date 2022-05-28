import React, { useState } from 'react'
import { headerImage } from '../../assets';
import { partners } from '../../assets';

import { Grid, Button, Box, Typography } from '@mui/material';

import { styles } from './styles';

const Hero = () => {
    const [bgImage, setBgImage] = useState(window.innerWidth > 600 ? headerImage : partners)

    window.addEventListener('resize', ()=>{
        window.innerWidth > 600 ? setBgImage(headerImage) : setBgImage(partners);
    })


  return (
    <Box sx={{...styles.Box, backgroundImage:`url(${bgImage})`}}>
        <Grid minHeight='90vh'  container  alignItems='center' justifyContent='center'>
            <Grid item xs={10} sm={7}>
                <Typography variant='h6' textAlign='center' color='#fff'>
                    COMMENCEZ DÉS MAINTENANT Á ÉTABLIR <br />
                    VOS ACTES D'ÉTAT CIVIL EN LIGNE
                </Typography>
            </Grid>
            <Grid item xs={10} sm={7}>
                <Typography variant='body1' textAlign='center' color='#fff'>
                    Registre d'état civil est un site internet destiné á accompagner les personnes
                    physiques et morales dans leurs démarches administratives pour l'obtention d'un acte d'état civil.
                </Typography>
            </Grid>
            <Grid item texAlign='center' xs={10} sm={7}>

                    <Button  variant='contained'>FAIRE UNE DÉCLARATION</Button>
                    <Button  color='secondary' variant='contained'>DEMANDER UN DUPLICATA</Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero