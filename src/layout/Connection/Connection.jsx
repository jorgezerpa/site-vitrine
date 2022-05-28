import React, { useState } from 'react';
import { partners } from '../../assets';
import { logo } from '../../assets';

import { ConnectionForm } from '../../components';

import { Box, Grid, Typography, Button } from '@mui/material';


const Connection = () => {
  const [imageHeight, setImageHeight] = useState(window.innerWidth > 600 ? 300 : 250);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', ()=>{
    setWindowWidth(window.innerWidth);
    window.innerWidth >  600 ? setImageHeight(300) : setImageHeight(250)
  })


  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={5} sx={{backgroundImage:`url(${partners})`, backgroundPosition: 'center -50px', backgroundSize:'cover', backgroundRepeat:'no-repeat', minHeight: imageHeight}} >
        
        </Grid>
        
        <Grid textAlign='center' item xs={12} sm={6} md={7}>

              <Box marginTop={2}><img src={logo} alt="" style={{marginBottom:'30px'}} /></Box>
              <Typography variant='h6' marginBottom='20px' fontWeight='bold'>connexion</Typography>
              <Button variant='contained' sx={{background: '#e05252', width: '60%'}}>SE CONNECTER AVEC GOOGLE</Button>
              <Typography variant='body1' marginTop='20px' fontWeight='bold'>OU</Typography>

              <ConnectionForm />

            <Button sx={{ width: '60%'}}  variant='contained'>CONNEXION</Button>
            <Typography variant='body1' marginY='30px' textAlign='center' >vous n'avez pas encore de compte ?</Typography>
            <Button color='secondary' sx={{ width: '60%'}} variant='contained'>S'INSCRIBE</Button>
        </Grid>
      </Grid>



     

    </div>
  )
}

export default Connection









{/* <div>
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
</div> */}





