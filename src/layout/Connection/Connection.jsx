import React from 'react';
import { partners } from '../../assets';
import { logo } from '../../assets';

import { Box, Grid, Typography, Button, TextField } from '@mui/material';

const Connection = () => {
  return (
    <div>
      <Grid container>
        <Grid sx={{backgroundImage:`url(${partners})`, backgroundPosition: 'right-top', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} item xs={12} sm={6} padding={5}>
        
        </Grid>
        
        <Grid textAlign='center' item xs={12} sm={6}>
            <Typography textAlign='left' variant='h5' fontWeight='bold' gutterBottom marginBottom={6}>
                Laissez nous un message
            </Typography>
          

              <Box><img src={logo} alt="" /></Box>
              <Typography variant='body1' fontWeight='bold'>connexion</Typography>
              <Button variant='contained'>SE CONNECTER AVEC GOOGLE</Button>

            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div>
              <TextField sx={{m:1}} fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </div>

            <div>
              <Typography variant='body1'>Mot de passe oublié?</Typography>
            </div>

            <Button variant='contained'>CONNEXION</Button>
            <Typography variant='body1'>vous n'avez pas encore de compte ?</Typography>
            <Button variant='contained'>S'INSCRIBE</Button>
        </Grid>
        

      </Grid>
    </div>
  )
}

export default Connection