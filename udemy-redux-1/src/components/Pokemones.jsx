import React from 'react'
import {useDispatch,  useSelector} from 'react-redux' 
import {obtenerPokemonesAccion, siguientePokemonAccion} from '../redux/pokesDucks'

const Pokemones = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones)

    return (
        <div>
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            {/* <button onClick={() => dispatch(siguientePokemonAccion())}>Siguientes</button> */} {/* primera opcion */}
            <button onClick={() => dispatch(siguientePokemonAccion(20))}>Siguientes</button> {/* segunda pasandole el valor */}
            <ul>
                {
                    pokemones.map(item =>(
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
