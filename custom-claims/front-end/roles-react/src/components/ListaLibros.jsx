import React from 'react'

import {LibrosContext} from '../context/LibrosProvider'

import PintarAutor from './PintarAutor'

const ListaLibros = () => {

    const {libros} = React.useContext(LibrosContext)

    return (
        <div className='mb-5'>
            <ul className='list-group'>
                {
                    libros.map(libro => (
                        <li key={libro.id} className='list-group-item'>
                            <span className='lead text-uppercase text-primary'>
                                {libro.titulo}
                            </span>
                            <br/>
                            <span className=''>
                                Pág: {libro.paginas} Autor: 
                                <PintarAutor autor={libro.autor} id={libro.id}/>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListaLibros
