import axios from 'axios'

//Constantes
const dataInicial = {
    array: [], 
    offset: 0
}

const OBTENER_POQUEMONES_EXITO = 'OBTENER_POQUEMONES_EXITO'
const SIGUIENTE_POQUEMONES_EXITO = 'SIGUIENTE_POQUEMONES_EXITO'

//Reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
            case OBTENER_POQUEMONES_EXITO:
                return {...state, array: action.payload}
            case SIGUIENTE_POQUEMONES_EXITO:
                return {...state, array: action.payload.array, offset: action.payload.offset}
            default:
                return state
    }
}

//Acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

    /* console.log ( 'getState', getState().pokemones.offset) */
    const offset = getState().pokemones.offset
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POQUEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

/* primera sin el parametro, segunda con el parametro */
export const siguientePokemonAccion = (numero) => async (dispatch, getState) =>{
    const offset = getState().pokemones.offset
    //primera alternativa
    /* const siguiente = offset + 20 */
    //segunda alternativa
    const siguiente = offset + numero

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: SIGUIENTE_POQUEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })   
    } catch (error) {
        
    }
}
