import React from 'react'

import { Grid, Button, Box, Typography } from '@mui/material';

import { styles } from './styles';

const Hero = () => {
  return (
    <Box sx={styles.Box}>
        <Grid spacing={7} minHeight='90vh' width='50%' margin='0 auto' container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography variant='h6' textAlign='center' color='#fff'>
                    COMMENCEZ DÉS MAINTENANT Á ÉTABLIR <br />
                    VOS ACTES D'ÉTAT CIVIL EN LIGNE
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='body1' textAlign='center' color='#fff'>
                    Registre d'état civil est un site internet destiné á accompagner les personnes
                    physiques et morales dans leurs démarches administratives pour l'obtention d'un acte d'état civil.
                </Typography>
            </Grid>
            <Grid item>
                <Button variant='contained'>FAIRE UNE DÉCLARATION</Button>
                <Button color='secondary' variant='contained'>DEMANDER UN DUPLICATA</Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero