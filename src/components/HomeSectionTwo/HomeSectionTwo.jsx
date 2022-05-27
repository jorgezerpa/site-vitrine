import React from 'react'
import { homeCardsOne } from '../../constants';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { computer, listLabel } from '../../assets';

import { styles } from './styles';

const HomeSectionTwo = () => {
    return (
        <div style={styles.container}>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4} sx={styles.imageContainer}>
                    <img style={styles.image} src={computer} alt="" />
                </Grid>
                <Grid item xs={12} sm={6}>
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