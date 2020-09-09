import React from 'react'
import { Link } from "react-router-dom";

const Nosotros = () => {

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()=>{
        obtenerDatos()
    },[])/* los corchetes se ponen para que se llame solo una vez */

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setEquipo(users)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item =>(
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.email}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
