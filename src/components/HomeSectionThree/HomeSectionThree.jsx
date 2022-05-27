import React from 'react'
import { Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material'
import { homeCardsTwo } from '../../constants';

import { styles } from './styles';

const HomeCard = (title, image, list)=>(
    <Card sx={styles.card}>
        <CardMedia  sx={styles.cardImageContainer}>
            <img style={styles.cardImage} src={image} alt="" />
        </CardMedia>
        <CardContent>
            <Typography gutterBottom  textAlign='center' variant='body1' fontSize={15}>{title}</Typography>
                {
                    list.map((item, index)=>(
                        <Typography key={item+index} textAlign='left' variant='body1' fontSize={10}>{item}</Typography>
                    ))
                }
        </CardContent>
    </Card>
)



const HomeSectionThree = () => {
    return (
    <div style={{textAlign: 'center', padding: '0 30px'}} >
        <Typography variant='h3' margin={5}>NOTRE VALEUR AJOUTÉE</Typography>
        <Grid container spacing={3}>
            {
                homeCardsTwo.map((card, index)=>(
                    <Grid key={index} item xs={10} sm={4}>
                        { HomeCard(card.title, card.image, card.list) }
                    </Grid>
                ))
            }
        </Grid>

        <Box marginTop={3}>
            <Button>FAIRE UNE DÉCLARATION</Button>
            <Button>Á PROPOS DE NOUS</Button>
        </Box>

    </div>
  )
}


export default HomeSectionThree