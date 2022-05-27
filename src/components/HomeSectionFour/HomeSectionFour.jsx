import React from 'react'
import { homeCardsThree } from '../../constants';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'

import { styles } from './styles';

const HomeCard = (title,subtitle, image, text)=>(
    <Card>
        <CardContent>
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={2}>
                    <img width='40px' src={image} alt="" />
                </Grid>
                <Grid item xs={10}>
                    <Typography fontWeight='bold' fontSize={15} variant='body1' textAlign='left'>{title}</Typography>
                    <Typography fontSize={15} variant='body1' textAlign='left'>{subtitle}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Typography variant='body1' textAlign='left' fontSize={13}>{text}</Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
)



const HomeSectionFour = () => {
    return (
    <div style={{textAlign: 'center', padding: '0 50px'}} >

        <Typography variant='h5' margin={5}>CE QU'ILS PENSENT DE REGISTRE D'ÉTAT CIVIL</Typography>

        <Grid container spacing={10}>
            {
                homeCardsThree.map((card, index)=>(
                    <Grid key={index} item xs={10} sm={4}>
                        { HomeCard(card.title, card.subtitle, card.image, card.text) }
                    </Grid>
                ))
            }
        </Grid>    
    </div>
  )
}


export default HomeSectionFour