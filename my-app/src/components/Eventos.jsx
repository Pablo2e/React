import React, { Fragment, useState } from 'react' 
/* Fragment reemplaza a div si no vamos a darle una clase 
Tambien se puede usar solamente <> y </> y eliminar tambien Fragment*/

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick = () => {
        console.log ('Me diste un click')
        setTexto('Cambiando el texto')
    }

    return (
        <Fragment>
            <hr/>
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}>Click</button>
        </Fragment>
    )
}

export default Eventos
