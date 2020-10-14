import React from 'react'
import Navbar from './components/Navbar'
import VistaAdmin from './components/VistaAdmin'
import AgregarLibros from './components/AgregarLibros'
import {UsuarioContext} from './context/UsuarioProvider'
import Libros from './components/Libros'

const App = () => {

    const {usuario} = React.useContext(UsuarioContext)

    return (
        <div>
            <Navbar />
            <div className="container">
                {
                        usuario.rol !== 'admin' && <VistaAdmin />
                }
                {
                        usuario.rol !== 'autor' && <AgregarLibros />
                }
                <Libros />
            </div>
        </div>
    )
}

export default App

