import React, {useState} from 'react'
import { homeCardsOne } from '../../constants';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import {  computer, computerPersons, listLabel } from '../../assets';

import { styles } from './styles';

const HomeSectionTwo = () => {
    const [computerImage, setComputerImage] = useState(window.innerWidth > 600 ? computer : computerPersons );    
    
    window.addEventListener('resize', ()=>{
        window.innerWidth > 600 ? setComputerImage(computer) : setComputerImage(computerPersons)
    })

    return (
        <div style={styles.container}>
            <Grid container alignItems='center' justifyContent='center'>
                <Grid item xs={10} sm={5} md={4} sx={styles.imageContainer}>
                    <img style={styles.image} src={computerImage} alt="" />
                </Grid>
                <Grid item xs={10} sm={6}>
                    <Typography color='primary' fontWeight='bold' variant='h5' marginBottom={3}>Notre solution</Typography>
                    <Typography variant='body1' marginBottom={3}>Simplifier vos démarches de déclaration ou demande d'état civil!</Typography>
                    
                    <Typography variant='body1' fontWeight='bold' marginBottom={3}><span style={{marginRight: '20px'}}><img width='10px' src={listLabel} alt="" /></span> Systéme fiable, accessible et performant</Typography>
                    <Typography variant='body1' fontWeight='bold' marginBottom={3}><span style={{marginRight: '20px'}}><img width='10px' src={listLabel} alt="" /></span> Accesibilité multi-plateformes: <br /> PC, Smartphones et tablettes </Typography>
                    <Typography variant='body1' fontWeight='bold' marginBottom={3}><span style={{marginRight: '20px'}}><img width='10px' src={listLabel} alt="" /></span> Solution numérique et pérenne </Typography>
                </Grid>
            </Grid>
        </div>    
    
  )
}


export default HomeSectionTwo