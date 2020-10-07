import React from 'react'
import {
    Hidden,
    makeStyles,

} from '@material-ui/core'
import Navbar from './Navbar'
import Cajon from './Cajon'
import Cajita from './Cajita'

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,// para que el alto del navbar sea siempre el mismo
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Contenedor = (props) => {

    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

    const accionAbrir = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir}/>
            <Hidden xsDown>
                <Cajon
                variant='permanent'
                open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Cajon
                variant='temporary'
                open={abrir}
                onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Cajita/>
            </div>
        </div>
    )
}

export default Contenedor
