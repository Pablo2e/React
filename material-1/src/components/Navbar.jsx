import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core'
import theme from '../temaConfig'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1
    }
}))

const Navbar = () => {

    const clases = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                  <IconButton color="inherit" aria-label="menu" className={clases.menuButton}>
                    <MenuIcon />
                  </IconButton>
                <Typography variant="h6" className={clases.title}>
                  Bucmarcs
                </Typography>
                <Button variant="text" color="inherit">
                  login
                </Button>
              </Toolbar>
            </AppBar>
            <div className={clases.offset}></div>
        </div>
    )
}

export default Navbar
