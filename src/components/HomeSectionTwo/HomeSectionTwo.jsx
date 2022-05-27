import React from 'react'
import { homeCardsOne } from '../../constants';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { computer } from '../../assets';

import { styles } from './styles';

const HomeSectionTwo = ({ title, subtitle }) => {
    return (
        <div style={styles.container}>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4} sx={styles.imageContainer}>
                    <img style={styles.image} src={computer} alt="" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant='body1' marginBottom={5}>Notre solution</Typography>
                    <Typography variant='body1' marginBottom={3}>Simplifier vos démarches de déclaration ou demande d'état civil!</Typography>
                    <Typography variant='body1' marginBottom={3}>Systéme fiable, accessible et performant</Typography>
                    <Typography variant='body1' marginBottom={3}>Accesibilité multi-plateformes: <br /> PC, Smartphones et tablettes </Typography>
                    <Typography variant='body1' marginBottom={3}>Solution numérique et pérenne </Typography>
                </Grid>
            </Grid>
        </div>    
    
  )
}


export default HomeSectionTwo