import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()
    console.log(id)

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()=>{
        const obtenerDatos = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const users = await data.json()
            setEquipo(users)
        }
        obtenerDatos()
    },[id])/* los corchetes se ponen para que se llame solo una vez */


    return (
        <div>
            <h3>{equipo.name}</h3>
            <p>{equipo.email}</p>
        </div>
    )
}

export default User
