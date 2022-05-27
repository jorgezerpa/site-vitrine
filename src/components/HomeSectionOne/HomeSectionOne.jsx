import React from 'react'
import { homeCardsOne } from '../../constants';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'


const HomeCard = (title, image)=>(
    <Card>
        <CardMedia>
            <img height='140px' src={image} alt="" />
        </CardMedia>
        <CardContent sx={{background:'#eee'}}>
            <Typography variant='body1'>{title}</Typography>
        </CardContent>
    </Card>
)



const HomeSectionOne = () => {
    return (
    <div style={{textAlign: 'center'}} >
        <Typography variant='h5' marginTop={12} gutterBottom >QUEL ACTE D'ÉTAT CIVIL DÉSIREZ-VOUS? </Typography>
        <Typography variant='body1'>Demande ou Déclaration: Choisissez une catégorie selon <br /> le type d'acte d'état civil souhaité</Typography>

        <Grid container marginTop={5} spacing={5} display='flex' justifyContent='center' alignItem='center'>
            {
                homeCardsOne.map((card, index)=>(
                    <Grid key={index} item xs={10} sm={3}>
                        { HomeCard(card.title, card.image) }
                    </Grid>
                ))
            }
        </Grid>    
    </div>
  )
}


export default HomeSectionOne