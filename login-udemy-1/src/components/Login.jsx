import React from 'react'
import {auth, db} from '../firebase'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPaswsword] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)


    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            // console.log('Ingrese Email')
            setError('Ingrese Email')
            return
        }
        if(!password.trim()){
            // console.log('Ingrese Password')
            setError('Ingrese Password')
            return
        }
        if(password.length < 6){
            // console.log('Tu contraseña debe tener mas de 6 caracteres')
            setError('Tu contraseña debe tener más de 6 caracteres')
            return
        }
        setError(null)
        console.log('Pasando todas las validaciones')

        if(esRegistro){
            registrar()
        }
    }

    const registrar = React.useCallback(async() => {
        try {
            const res =await auth.createUserWithEmailAndPassword(email, password)
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid:res.user.uid
            })
            setEmail('')
            setPaswsword('')
            setError(null)
            
        } catch (error) {
            console.log(error)
            if(error.code==='auth/invalid-email'){
                setError('Email no valido')
            }
            if(error.code==='auth/email-already-in-use'){
                setError('Email ya utilizado')
            }
        }
    }, [email, password])

    return (
        <div className="mt-5">
           <h3 className="text-center">
               {
                  esRegistro ? 'Registro de usuarios' : 'Login de acceso' 
               }
           </h3>
           <hr/>
           <div className="row justify-content-center">
               <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                   <form onSubmit={procesarDatos}>
                       {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )   
                       }
                       <input 
                        type="email"
                        className="form-control mb-2"
                        placeholder="Ingrese un Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />
                       <input 
                        type="password"
                        className="form-control mb-2"
                        placeholder="Ingrese un password"
                        onChange={e => setPaswsword(e.target.value)}
                        value={password}
                    />
                    <button className="btn btn-dark btn-lg btn-block"
                            type="submit">
                        {
                            esRegistro ? 'Registrarse' : 'Acceder'
                        }
                    </button>
                    <button className="btn btn-info btn-sm btn-block"
                            onClick={() => setEsRegistro(!esRegistro)}
                            type="button">
                        {
                            esRegistro ? '¿Ya estas registrado?' : '¿No tienes cuenta?'
                        }
                    </button>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Login
