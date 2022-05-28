import  React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { DropDown, MenuDropDown } from '../../components';

import { logo } from '../../assets';
import { styles } from './styles';



const MobileMenu = () => (
  <Box display='flex' flexDirection='column' gap='10px' paddingBottom='10px'>
    <Typography sx={{textDecoration:'none'}} component={Link} to="/" color='#000'>accueil</Typography>
    <Typography sx={{textDecoration:'none'}} component={Link} to="/propos" color='#000'>á propos</Typography>
    <Typography sx={{textDecoration:'none'}} component={Link} to="/faq" color='#000'>faq</Typography>
    <Button component={Link} to="/conextion" variant='contained'>conextion</Button>
  </Box>
  
)



const  ButtonAppBar = () => {

  const [hideMenu, setHideMenu] = useState(window.innerWidth > 700 ? false : true);
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = ()=>{
    setShowMobileMenu(!showMobileMenu)
  }

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
                    <Box position='relative' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                      <Typography color='#000' onClick={toggleMobileMenu} ><MenuIcon /></Typography>
                      {showMobileMenu && <MobileMenu />}
                    </Box>
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