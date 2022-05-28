import { createTheme } from '@mui/material/styles';

// export const theme = createTheme({
//     palette: {
//     },
//   });


const Colors = {
  primary: "#147D06",
  secondary: "#fff",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
    typography : {
        fontFamily: 'Source Sans Pro, sans-serif',
        h6:{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            '@media (max-width:600px)': {
              fontSize: '1.2rem',
            },
        },
        body1:{
            fontSize: '.8rem',
            '@media (min-width:600px)': {
              fontSize: '.8rem',
            },
        }
    },


    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                margin:'20px'
            }
        }
    }
});

export default theme;

