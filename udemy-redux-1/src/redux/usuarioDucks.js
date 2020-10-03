import {auth, firebase, db, storage} from '../firebase'

//data inicial
const dataInicial = {
    loading: false,
    activo: false,
}

//types
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USUARIO_EXITO = 'USUARIO_EXITO'
const CERRAR_SESION = 'CERRAR_SESION'

//reducer
export default function usuarioReducer (state = dataInicial, action) {
    switch(action.type){
        case LOADING: 
            return{...state, loading: true}
        case USUARIO_ERROR: 
            return{...dataInicial}
        case USUARIO_EXITO: 
            return{...state, loading: false, activo: true, user: action.payload}
        case CERRAR_SESION: 
            return{...dataInicial}
        default:
            return{...state}
    }
}

//acciones
export const ingresoUsuarioAccion = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        console.log(res.user)

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL
        }

        const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()
        if (usuarioDB.exist){
            //cuando existe el usuario en el firestore
            await db.collection('usuarios').doc(usuario.email).set(usuario)
            dispatch({
                type: USUARIO_EXITO,
                payload: usuarioDB.data()
            })
            localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
        } else {
            //no existe el usuario en el firestore
            await db.collection('usuarios').doc(usuario.email).set(usuario)
            dispatch({
                type: USUARIO_EXITO,
                payload: usuario
            })
            localStorage.setItem('usuario', JSON.stringify(usuario))
        }

    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}

export const leerUsuarioActivoAccion = () => (dispatch) => {
    if(localStorage.getItem('usuario')){
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}

export const cerrarSesionAccion = () => (dispatch) => {
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESION
    })
}

export const actualizarUsuarioAccion = (nombreActualizado) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })

    const {user} = getState().usuario

    try {
        
        await db.collection('usuarios').doc(user.email).update({
            displayName: nombreActualizado
        })

        const usuario = {
            ...user,
            displayName: nombreActualizado
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })
        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (error) {
        console.log(error)
    }
}

export const editarFotoAccion = (imageEditada) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })

    const {user} = getState().usuario

    try {
        //el 1º child crea una carpeta, el segundo el documento
        const imageRef = await storage.ref().child(user.email).child('foto perfil')
        await imageRef.put(imageEditada) // esto pone la nueva imagen
        const imagenURL = await imageRef.getDownloadURL() // esto la llama nuevamente
        await db.collection('usuarios').doc(user.email).update({
            photoURL: imagenURL
        })

        const usuario = {
            ...user,
            photoURL: imagenURL
        }

        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })
        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (error) {
        console.log(error)
    }

}