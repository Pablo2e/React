import React from 'react';
import {Button} from '@material-ui/core' //para importar el componente boton de material ui
import DeleteIcon from '@material-ui/icons/Delete';
import {Icon, IconButton, Typography} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import theme from './temaConfig'
import Navbar from './components/Navbar';


/* const useStyle = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
})
 */
function App() {

  /* const clases = useStyle() */

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Button variant="contained" color="primary">
        Boton
      </Button>
      <Button variant="contained" color="secondary">
        Boton
      </Button>
      <Typography variant="h1" color="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum, consequatur, quisquam alias porro officia enim unde mollitia ipsa, odio reiciendis sapiente praesentium in vel asperiores eaque aut iure laboriosam?
      </Typography>
      {/* <Button className={clases.botonPersonalizado}>
        Mi botón personalizado
      </Button> */}
    {/* <Typography variant="h1" color="primary">
      Tipografia
    </Typography>
    <Typography variant="body1" color="secondary" align='center' paragraph>lorem</Typography>
    <Typography variant="body1" color="initial" align='center'>lorem</Typography> */}
     {/*  <DeleteIcon
        color="primary"/>
      <Icon>
        room
      </Icon>
      <Button 
        variant="contained" 
        color="secondary"
        endIcon={<DeleteIcon/>}>
        Delete
      </Button>
      <Button 
        variant="contained" 
        color="secondary"
        endIcon={<Icon>
          room
        </Icon>}>
        Delete
      </Button>
      <IconButton 
        aria-label="delete">
        <DeleteIcon
          color="primary"/>
      </IconButton> */}
      {/* <Button color="primary">primary</Button>
      <Button color="secondary" variant="contained">
        contained
      </Button>
      <Button color="secondary" variant="contained" disableElevation>
        disableElevation
      </Button>
      <Button variant="outlined" color="primary" href="https://google.com">
        Google
      </Button>
      <Button variant="outlined" color="primary" fullWidth>
        fullWidth
      </Button>
      <Button color="secondary" variant="contained" size="small">
        small
      </Button>
      <Button color="secondary" variant="contained" size="medium">
        medium
      </Button>
      <Button color="secondary" variant="contained" size="large">
        large
      </Button> */}
    </ThemeProvider>
  );
}

export default App;
