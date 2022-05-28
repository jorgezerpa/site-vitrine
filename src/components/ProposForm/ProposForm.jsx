import React from 'react';
import { Typography } from '@mui/material';

import './ProposForm.css';

const ProposForm = () => {
  return (
    <form className='proposeform__container'>
        <div className='proposeform__group'>
          <div className='proposeform__item'>
              <label htmlFor='connection_nom'>Nom</label>
              <input id='connection_nom' type="text" />
          </div>
          <div className='proposeform__item'>
              <label htmlFor='connection_email'>Email</label>
              <input id='connection_email' type="text" />
          </div>
        </div>
        <div className='proposeform__item'>
            <label htmlFor='connection_motdepasse'>Mot de Passe</label>
            <input id='connection_motdepasse' type="text" />
        </div>
        <div className='proposeform__item'>
            <label htmlFor='connection_motdepasse'>Mot de Passe</label>
            <textarea rows={7}></textarea>
        </div>

        <Typography sx={{ textDecoration: 'underline', width: '60%' }} marginTop='10px' color='#e05252' variant='body1' textAlign='right' fontWeight='bold' >Mot de passe oublié?</Typography>
    </form>

  )
}

export default ProposForm