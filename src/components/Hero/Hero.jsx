import React, { useState } from 'react'
import { headerImage } from '../../assets';
import { partners } from '../../assets';

import { Grid, Button, Box, Typography } from '@mui/material';
import MyButton from '../../styles/Buttons';

import { styles } from './styles';

const Hero = () => {
    const [bgImage, setBgImage] = useState(window.innerWidth > 600 ? headerImage : partners)
    const [title, setTitle] = useState("COMMENCEZ DÉS MAINTENANT Á ÉTABLIR VOS ACTES D'ÉTAT CIVIL EN LIGNE");
    const [subtitle, setSubtitle] = useState("Registre d'état civil est un site internet destiné á accompagner les personnes physiques et morales dans leurs démarches administratives pour l'obtention d'un acte d'état civil.");


    window.addEventListener('resize', ()=>{
        window.innerWidth > 600 ? setBgImage(headerImage) : setBgImage(partners);
    })


  return (
    <Box sx={{...styles.Box, backgroundImage:`url(${bgImage})`}}>
        <Grid minHeight='90vh'  container flexDirection='column'  alignItems='center' justifyContent='center'>
            <Grid item xs={10} sm={6} marginBottom='30px'>
                <Typography variant='h6' textAlign='center' color='#fff'>
                    { title }
                </Typography>
            </Grid>
            <Grid item xs={10} sm={6} marginBottom='30px'>
                <Typography variant='body1' textAlign='center' color='#fff'>
                    { subtitle }
                </Typography>
            </Grid>
            <Grid item  xs={10} sm={12} display='flex' justifyContent='center' gap='30px' flexWrap='wrap'>
                <MyButton sx={{width:'250px'}} margin='0 auto' variant='contained'>FAIRE UNE DÉCLARATION</MyButton>
                <MyButton sx={{width:'250px'}} margin='0 auto' color='secondary' variant='contained'>DEMANDER UN DUPLICATA</MyButton>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Hero