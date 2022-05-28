import React from 'react';
import { Typography } from '@mui/material';

import './ConnectionForm.css';

const ConnectionForm = () => {
  return (
    <form className='connectionform__container'>
        <div className='connectionform__item'>
            <label htmlFor='connection_nom'>Nom</label>
            <input id='connection_nom' type="text" />
        </div>
        <div className='connectionform__item'>
            <label htmlFor='connection_email'>Email</label>
            <input id='connection_email' type="text" />
        </div>
        <div className='connectionform__item'>
            <label htmlFor='connection_motdepasse'>Mot de Passe</label>
            <input id='connection_motdepasse' type="text" />
        </div>

        <Typography sx={{ textDecoration: 'underline', width: '60%' }} marginTop='10px' color='#e05252' variant='body1' textAlign='right' fontWeight='bold' >Mot de passe oublié?</Typography>
    </form>

  )
}

export default ConnectionForm