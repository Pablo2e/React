import React from 'react'
import ListaLibros from './components/ListaLibros'
import Navbar from './components/Navbar'

import {UsuarioContext} from './context/UsuarioProvider'
import AdminRoles from './components/AdminRoles'
import AgregarLibro from './components/AgregarLibro'

const App = () => {

    const {usuario} = React.useContext(UsuarioContext)

    return (
        <div>
            <Navbar />
            
            <div className="container mt-3">
                {
                    usuario.rol === 'admin' && <AdminRoles usuario={usuario} />
                }

                {
                    (usuario.rol === 'autor' || usuario.rol === 'admin') && <AgregarLibro />
                }

                <ListaLibros />
            </div>
        </div>
    )
}

export default App

