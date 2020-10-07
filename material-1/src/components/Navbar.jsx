import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]:{
          display: 'none',
      },
    },
    title:{
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
        },
    },
}))

const Navbar = (props) => {

    const clases = useStyles()
    return (
        
    <AppBar className={clases.appBar}>
        <Toolbar>
            <IconButton 
                color="inherit" 
                aria-label="menu" 
                className={clases.menuButton}
                onClick={() => props.accionAbrir()}
            >
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
        
    )
}

export default Navbar
