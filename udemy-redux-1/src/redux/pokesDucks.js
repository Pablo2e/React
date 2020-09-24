import axios from 'axios'

//Constantes
const dataInicial = {
    array: []
}

const OBTENER_POQUEMONES_EXITO = 'OBTENER_POQUEMONES_EXITO'

//Reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
            case OBTENER_POQUEMONES_EXITO:
                return {...state, array: action.payload}
            default:
                return state
    }
}

//Acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: OBTENER_POQUEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}
