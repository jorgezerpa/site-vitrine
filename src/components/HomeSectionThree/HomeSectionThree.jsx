import React, { useState } from 'react'
import { Typography, Grid, Card, CardMedia, CardContent, Button, Box, Icon } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import { homeCardsTwo } from '../../constants';

import { styles } from './styles';

const HomeCard = (title, image, list)=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardHeight, setCardHeight] = useState(window.innerWidth>600 ? '250px' : 'auto')

    window.addEventListener('resize', ()=>{
        setWindowWidth(window.innerWidth);
        window.innerWidth>600 ? setCardHeight('250px')  : setCardHeight('auto');
    })

    return(
    <Card sx={styles.card}>
        <CardMedia  sx={styles.cardImageContainer}>
            <img style={styles.cardImage} src={image} alt="" />
        </CardMedia>
        <CardContent sx={{minHeight: cardHeight}}>
            <Typography  fontWeight='bold' gutterBottom  textAlign='center' variant='body1'>{title}</Typography>
                {
                    list.map((item, index)=>(
                            <Typography key={item+index} textAlign='left' variant='body1' >
                                <CircleIcon sx={{fontSize: '8px'}} />
                                {item}</Typography>
                    ))
                }
        </CardContent>
    </Card>
    )}



const HomeSectionThree = () => {
    return (
    <div style={{textAlign: 'center', padding: '0 30px'}} >
        <Typography variant='h6' marginTop={10} marginBottom={5}>NOTRE VALEUR AJOUTÉE</Typography>
        <Grid container justifyContent='center' alignItems='center' spacing={3}>
            {
                homeCardsTwo.map((card, index)=>(
                    <Grid key={index} item xs={10} sm={4}>
                        { HomeCard(card.title, card.image, card.list) }
                    </Grid>
                ))
            }
        </Grid>
        <Box marginTop={3} display='flex' justifyContent='center' gap='20px' flexWrap='wrap'>
            <Button variant='contained'>FAIRE UNE DÉCLARATION</Button>
            <Button variant='contained' color='secondary'>Á PROPOS DE NOUS</Button>
        </Box>

    </div>
  )
}


export default HomeSectionThree