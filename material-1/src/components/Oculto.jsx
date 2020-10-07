import React from 'react'
import {Typography, withWidth, Hidden, Button} from '@material-ui/core'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>
            <Hidden smDown>{/* oculta el btn cuando el tamaño sea menor a sm */}
                <Button variant="contained" color="primary">
                  sm
                </Button>
            </Hidden>
            <Hidden mdUp>{/* oculta el btn cuando el tamaño sea igual o mayor a md */}
                <Button variant="contained" color="primary">
                  md
                </Button>
            </Hidden>
            <Hidden only={['lg', 'md']}>{/* oculta el btn cuando el tamaño sea igual al parametro */}
                <Button variant="contained" color="primary">
                  lg
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)
