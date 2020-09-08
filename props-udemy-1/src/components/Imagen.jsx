import React from 'react'
// otra opcion es que en vez de props, llaves y el atributo directamente
const Imagen = ({urlImagen}) => {
    return (
        <div>
            <img src={urlImagen} classname='mr-3' alt=""/>
        </div>
    )
}

export default Imagen
