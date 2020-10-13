import React from 'react'
import {db, functions} from '../firebase'

const VistaAdmin = () => {

    const [email, setEmail] = React.useState('')
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
                        <button 
                            className="btn btn-danger mx-2"
                            onClick={() => administrador(usuario.email)}
                        >
                            Administrador
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default VistaAdmin
