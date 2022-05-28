import React from 'react';
import { computerPersons, proposOne, proposIcon, proposIconTwo, proposIconThree } from '../../assets';

import { Box, Grid, Typography, Button, TextField } from '@mui/material';

const Propos = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Box>
        <Typography color='secondary' sx={{backgroundColor: '#147D07'}}  padding={10} variant='h6'>A propos de nous</Typography>
      </Box>
      <Box padding={10} display='flex' justifyContent='center'>
        <img width='300px' src={computerPersons} alt="" />
      </Box>
      <Box padding={10}>
        <Typography variant='h6'>
          Les intéres fondamentaux de notre solution sont le partage de l'information, <br /> la mutualisation de systémes et la réutilisation de ces données.
        </Typography>
      </Box>

      <Grid  padding={10} marginBottom={10} container justifyContent='center'>
        <Grid item xs={12} sm={6}>
              <Typography  textAlign='left' gutterBottom variant='body1' fontWeight='bold'>Notre mission</Typography>
              <Typography  textAlign='left' gutterBottom variant='body1'>1) faciliter le processus entre la criation et la gestion des déclarations/demandés.</Typography>
              <Typography  textAlign='left' gutterBottom variant='body1'>2) Fournir des notifications et suivi á temps réel.</Typography>
              <Typography  textAlign='left' gutterBottom variant='body1'>3) Simplifier la relation votré les utilisateurs et les agents d'état civil.</Typography>
              <Typography  textAlign='left' gutterBottom variant='body1'>4) Améliorer les compétences des agents aux nouvelles technologies.</Typography>
              <Typography  textAlign='left' gutterBottom variant='body1'>5) Stimuler la productivité des agents.</Typography>
              <Button variant='contained'>FAIRE UNE DÉCLARATION</Button>
              <Button variant='contained' color='secondary'>DEMANDER UNA DUPLICATA</Button>
        </Grid>
        
        <Grid item xs={12} sm={6}>
              <img height='300px' src={proposOne} alt="" />
        </Grid>
      </Grid>


      <Grid padding={10} container justifyContent='center' alignItems='center'>
          <Grid xs={12}  sm={4}><img width='90%' src={proposIcon} alt="" /></Grid>
          <Grid xs={12}  sm={4}><img width='90%' src={proposIconTwo} alt="" /></Grid>
          <Grid xs={12}  sm={4}><img width='90%' src={proposIconThree} alt="" /></Grid>
      </Grid>



      <Grid container padding={10}>
        <Grid item xs={12} sm={6}>
            <Typography textAlign='left' variant='h5' fontWeight='bold' gutterBottom marginBottom={6}>
                Laissez nous un message
            </Typography>
          
            <div>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div>
            <TextField sx={{m:1}} fullWidth id="outlined-multiline-static" multiline rows={4} defaultValue="Default Value" />        
            </div>
            <Button variant='contained'>Envoyer</Button>
        </Grid>
        

        <Grid item xs={12} sm={6} padding={5}>
              <Typography textAlign='left' gutterBottom fontWeight='bold' variant='h5' color='primary'>INOV CONSULTING</Typography>
              <Typography textAlign='left' gutterBottom marginBottom={5} variant='body1'>Let's transform together, for better efficiency!</Typography>
              <Typography textAlign='left' gutterBottom marginBottom={5} variant='body1'>Téléphone: 0033 (6) 98 56 66 33</Typography>
              <Typography textAlign='left' gutterBottom marginBottom={5} variant='body1'>Email: info@inov-corp.com</Typography>
              <Typography textAlign='left' gutterBottom marginBottom={5} variant='body1'>Site web: http://inov-corp.com</Typography>
        </Grid>
      </Grid>



    </div>
  )
}

export default Propos