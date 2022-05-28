import React, { useState } from 'react';
import { partners } from '../../assets';
import { logo } from '../../assets';

import { Box, Grid, Typography, Button, TextField } from '@mui/material';

const Inscription = () => {
  const [imageHeight, setImageHeight] = useState(window.innerWidth > 600 ? 400 : 250);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', ()=>{
    setWindowWidth(window.innerWidth);
    window.innerWidth >  600 ? setImageHeight(400) : setImageHeight(250)
  })


  return (
    <div>
      <Grid container>
        <Grid sx={{backgroundImage:`url(${partners})`, backgroundPosition: 'center -50px', backgroundSize:'cover', backgroundRepeat:'no-repeat', minHeight: imageHeight}} item xs={12} sm={6}>
        
        </Grid>
        
        <Grid textAlign='center' item xs={12} sm={6}>
            <Typography textAlign='center' paddingTop={2} variant='h5' fontWeight='bold' gutterBottom>
                Laissez nous un message
            </Typography>
          

              <Box><img src={logo} alt="" style={{marginBottom:'30px'}} /></Box>
              <Typography variant='body1' marginBottom='30px' fontWeight='bold'>connexion</Typography>
              <Button variant='contained'>SE CONNECTER AVEC GOOGLE</Button>

            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Num" variant="outlined" />
            </div>
            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Mot de passe" variant="outlined" />
            </div>

            <div>
              <Typography variant='body1' textAlign='right' color='#f22' >Mot de passe oublié?</Typography>
            </div>

            <Button  variant='contained'>CONNEXION</Button>
            <Typography marginY='30px'  variant='body1'>vous n'avez pas encore de compte ?</Typography>
            <Button color='secondary' variant='contained'>S'INSCRIBE</Button>
        </Grid>
        

      </Grid>
    </div>
  )
}

export default Inscription