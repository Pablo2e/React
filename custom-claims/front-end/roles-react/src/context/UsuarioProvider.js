import React from 'react'
import {auth, firebase, db} from '../firebase'

export const UsuarioContext = React.createContext()

const UsuarioProvider = (props) => {

    const dataUsuarioInicial = {email: null, uid: null, activo: null}
    const [usuario, setUsuario] = React.useState(dataUsuarioInicial)

    React.useEffect(() => {
        detectarUsuario()
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(userChange => {
            if(userChange){
                userChange.getIdTokenResult().then(idTokenResult => {
                    console.log(idTokenResult.claims)
                    // console.log(idTokenResult.claims.accounts.admin)
                    if (!!idTokenResult.claims.admin) {
                        console.log('es admin')
                        console.log(idTokenResult.claims.admin)
                        setUsuario({email: userChange.email, uid: userChange.uid, activo: true, rol: 'admin'})
                    } else if(!!idTokenResult.claims.autor){
                        console.log('es autor')
                        setUsuario({email: userChange.email, uid: userChange.uid, activo: true, rol: 'autor'})
                    }else {
                        console.log('es invitado')
                        setUsuario({email: userChange.email, uid: userChange.uid, activo: true, rol: 'invitado'})
                    }
                })
            }else{
                setUsuario({email: null, uid: null, activo: false, rol: null})
            }
        })
    }

    const iniciarSesion = async() => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await auth.signInWithPopup(provider)
            
            // crearmos al usuario en db si no existe registro.
            const existe = await db.collection('usuarios').doc(res.user.email).get()
            console.log(existe.exists)
            if(!existe.exists){
                await db.collection('usuarios').doc(res.user.email).set({
                    email: res.user.email,
                    uid: res.user.uid,
                    rol: 'invitado'
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    return (
        <UsuarioContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider