import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';

import { DropDown } from '../../components';

import { logo } from '../../assets';
import { styles } from './styles';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={styles.Appbar}>
        <Toolbar sx={styles.Toolbar}>
          <IconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <img  src={logo} alt="" height='40px' />
          </IconButton>

            <Toolbar sx={styles.Menu} >
              <Typography color='#000'>accueil</Typography>
              <Typography color='#000'>les actes</Typography>
              <Typography color='#000'>á propos</Typography>
              <Typography color='#000'>faq</Typography>
              <DropDown />
              <Button variant='contained'>conextion</Button>
            </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}