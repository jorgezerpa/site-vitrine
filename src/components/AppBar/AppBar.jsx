import  React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

import { DropDown, MenuDropDown } from '../../components';

import { logo } from '../../assets';
import { styles } from './styles';

const  ButtonAppBar = () => {

  const [hideMenu, setHideMenu] = useState(window.innerWidth > 700 ? false : true);
  // const [window, setWindow] = useState(window.inn)

  window.addEventListener('resize', ()=>{
    if(window.innerWidth<700) setHideMenu(true);
    else setHideMenu(false);
  })

  
  return (
    <Box>
      <AppBar position="static" sx={styles.Appbar}>
        <Toolbar sx={styles.Toolbar}>
          <IconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <img  src={logo} alt="" height='40px' />
          </IconButton>

                {
                  hideMenu && (
                    <Typography sx={{textDecoration:'none'}} component={Link} to="/faq" color='#000'>Menu</Typography>
                  )
                }

            <Toolbar sx={styles.Menu} >

              {
                !hideMenu && (
                  <>
                    <Typography sx={{textDecoration:'none'}} component={Link} to="/" color='#000'>accueil</Typography>
                    <MenuDropDown />             
                    <Typography sx={{textDecoration:'none'}} component={Link} to="/propos" color='#000'>á propos</Typography>
                    <Typography sx={{textDecoration:'none'}} component={Link} to="/faq" color='#000'>faq</Typography>
                  </>
                )
              }

              <DropDown />
              {
                !hideMenu && (
                  <Button  component={Link} to="/conextion" variant='contained'>conextion</Button>
                )
              }
          

            </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default ButtonAppBar