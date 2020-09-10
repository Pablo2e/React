import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPaswsword] = React.useState('')

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            console.log('Ingrese Email')
            return
        }
        if(!password.trim()){
            console.log('Ingrese Password')
            return
        }
        if(password.length < 6){
            console.log('Tu contraseña debe tener mas de 6 caracteres')
        }
        console.log('Pasando todas las validaciones')
    }

    return (
        <div className="mt-5">
           <h3 className="text-center">Registro de usuarios</h3>
           <hr/>
           <div className="row justify-content-center">
               <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                   <form onSubmit={procesarDatos}>
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
                    <button className="btn btn-dark btn-lg btn-block">
                        Registrarse
                    </button>
                    <button className="btn btn-info btn-sm btn-block">
                        ¿Ya tienes cuenta?
                    </button>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Login
