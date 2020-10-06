import { createMuiTheme } from '@material-ui/core/styles'
import purple from'@material-ui/core/colors/purple'
import lightGreen from'@material-ui/core/colors/lightGreen'

const theme = createMuiTheme({
    palette:{
        primary: {
            main: lightGreen[700]
        },
        secondary: {
            main: purple[700]
        }
    }
})

export default theme