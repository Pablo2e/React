import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        if(!fruta.trim()){
            console.log('Esta vacio fruta')
            return
        }
        if(!descripcion.trim()){
            console.log('Esta vacio descripción')
            return
        }
        console.log('Procesando datos...' + fruta + " " + descripcion)
        e.target.reset()//vacia los campos luego de darle a boton
        setFruta('')// vacia el state en el hooks del componente en consola   
        setDescripcion('')// vacia el state en el hooks del componente en consola
    
        setLista([
            ...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit= { guardarDatos }>
                <input 
                    type="text"
                    placeholder="Ingrese fruta"
                    className="form-control mb-2"
                    onChange={e => setFruta(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Ingrese descripción"
                    className="form-control mb-2"
                    onChange={e => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item,index) => (
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
