import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante'
    const imagen = 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/oido-surfista.jpg'

    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={imagen} alt=""/>
        </div>
    )
}

export default Variables
