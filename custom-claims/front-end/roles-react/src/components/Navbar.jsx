import React from 'react'
import {UsuarioContext} from '../context/UsuarioProvider'


const Navbar = () => {

    const {usuario, iniciarSesion, cerrarSesion} = React.useContext(UsuarioContext)

    return (
        <div className='navbar navbar-dark bg-dark'>
            <div className="container">
                <div>
                    {
                        usuario.email ?(
                            <div className="button btn btn-dark" onClick={cerrarSesion}>
                                Cerrar Sesión
                            </div>
                        ) : (
                            <div className="button btn btn-dark" onClick={iniciarSesion}>
                        Login
                    </div>
                        )
                    }
                </div>
                <div>
                    <span className="text-light">
                        {
                            usuario.email ? usuario.email : 'Invitado'
                        }</span>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
