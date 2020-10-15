import React from 'react'

import {functions, db} from '../firebase'

const AdminRoles = (props) => {

    const [email, setEmail] = React.useState('')
    const [usuarios, setUsuarios] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try {
            const res = await db.collection('usuarios').get()
            setUsuarios(res.docs.map(doc => doc.data()))
        } catch (error) {
            console.log(error)
        }
    }

    const administrador = (email) => {
        if(!email.trim()){
            console.log('email vacio')
            return
        }
        const agregarRol = functions.httpsCallable('agregarAdministrador');
        
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    return console.log('no está autorizado')
                }
                db.collection('usuarios').doc(email).update({rol: 'admin'}).then(res => {
                    console.log('usuario admin actualizado')
                    fetchData()
                })
            })
            .catch(error => console.log(error))

        setEmail('')
    }

    const eliminarAdministrador = (email) => {
        if(!email.trim()){
            console.log('email vacio')
            return
        }
        const agregarRol = functions.httpsCallable('eliminarAdministrador');
        
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    return console.log('no está autorizado')
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'}).then(res => {
                    console.log('usuario invitado actualizado')
                    fetchData()
                })
            })
            .catch(error => console.log(error))

        setEmail('')
    }

    const agregarAutor = (email) => {
        if(!email.trim()){
            console.log('email vacio')
            return
        }
        const agregarRol = functions.httpsCallable('agregarAutor');
        
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    return console.log('no está autorizado')
                }
                db.collection('usuarios').doc(email).update({rol: 'autor'}).then(res => {
                    console.log('usuario autor actualizado')
                    fetchData()
                })
            })
            .catch(error => console.log(error))

        setEmail('')
    }

    const eliminarAutor = (email) => {
        if(!email.trim()){
            console.log('email vacio')
            return
        }
        const agregarRol = functions.httpsCallable('eliminarAutor');
        
        agregarRol({email: email})
            .then(res => {
                console.log(res)
                if(res.data.error){
                    return console.log('no está autorizado')
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'}).then(res => {
                    console.log('usuario invitado actualizado')
                    fetchData()
                })
            })
            .catch(error => console.log(error))

        setEmail('')
    }

    return (
        <div className='my-5'>
            <h3>Admin Roles</h3>
            <form onSubmit={administrador}>
                <input type="email" placeholder='ingrese email' onChange={e => setEmail(e.target.value)} value={email} className='form-control mb-2' />
                <button type='submit' className='btn btn-dark mb-2'>Agregar Admin</button>
            </form>
            {
                usuarios.map(usuario => (
                    <div key={usuario.uid} className='mb-2'>
                        {usuario.email} - rol: {usuario.rol}
                        {
                            usuario.rol === 'admin' ? (
                                <button className="btn btn-danger btn-sm mx-2" onClick={() => eliminarAdministrador(usuario.email)}>Eliminar Admin</button>
                            ) : (
                                <>
                                    <button className="btn btn-warning btn-sm mx-2" onClick={() => administrador(usuario.email)}>Admin</button>
                                    <button className="btn btn-info btn-sm mr-2" onClick={() => agregarAutor(usuario.email)}>Autor</button>
                                    <button className="btn btn-success btn-sm mr-2" onClick={() => eliminarAutor(usuario.email)}>Lector</button>
                                </>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default AdminRoles