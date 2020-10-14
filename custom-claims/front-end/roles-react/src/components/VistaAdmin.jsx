import React from 'react'
import {db, functions} from '../firebase'

const VistaAdmin = () => {

    /* const [email, setEmail] = React.useState('') */
    const [usuarios, setUsuarios] = React.useState([])

    React.useEffect(() => {
        fetchUsuarios()
    }, [])

    const fetchUsuarios = async() => {
        try {
            const res = await db.collection('usuarios').get()
            setUsuarios(res.docs.map(doc => doc.data()))
        } catch (error) {
            console.log(error)
        }
    }

    const administrador = email => {
        if(!email.trim()){
            console.log('email vacio')
            return
        }
        const agregarRol = functions.httpsCallable('agregarAdministrador');

        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    console.log('no tiene permisos')
                    return 
                }
                db.collection('usuarios').doc(email).update({rol: 'admin'})
                .then(user => {
                    console.log('usuario modificado rol administrador')
                    fetchUsuarios()
                })
            })
            .catch(error => console.log(error))

    }

    const crearAutor = email => {
        const agregarRol = functions.httpsCallable('crearAutor')
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    console.log('no tiene permisos')
                    return
                }
                db.collection('usuarios').doc(email).update({rol: 'autor'})
                .then(res => {
                    console.log('usuario modificado rol autor')
                    fetchUsuarios()
                })
            })
            .catch(error => console.log(error))   
    }

    const eliminarAutor = email => {
        const agregarRol = functions.httpsCallable('eliminarAutor')
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    console.log('no tiene permisos')
                    return
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'})
                .then(res => {
                    console.log('usuario modificado rol lector')
                    fetchUsuarios()
                })
            })
            .catch(error => console.log(error))
    }

    const eliminarAdministrador = email => {
        const agregarRol = functions.httpsCallable('eliminarAdministrador')
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    console.log('no tiene permisos')
                    return
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'})
                .then(res => {
                    console.log('usuario modificado rol lector')
                    fetchUsuarios()
                })
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>Administracion de usuarios</h3>
            {
                usuarios.map(usuario => (
                    <div key={usuario.uid} className='mb-2'>
                        {usuario.email} - rol: {usuario.rol}

                        {
                            usuario.rol ==='admin' ? (
                                <button 
                                    className="btn btn-danger mx-2"
                                    onClick={() => eliminarAdministrador(usuario.email)}
                                >
                                    Eliminar Administrador
                                </button>
                            ) : (
                                <>
                                <button 
                                    className="btn btn-dark mx-2"
                                    onClick={() => administrador(usuario.email)}
                                >
                                    Administrador
                                </button>
                                <button 
                                    className="btn btn-success mx-2"
                                    onClick={() => crearAutor(usuario.email)}
                                >
                                    Autor
                                </button>
                                <button 
                                    className="btn btn-info mx-2"
                                    onClick={() => eliminarAutor(usuario.email)}
                                >
                                    Invitado
                                </button>
                                </>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default VistaAdmin
