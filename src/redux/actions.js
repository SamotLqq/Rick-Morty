export const ADD_FAV = "ADD_FAV"
export const DEL_FAV = "REM_FAV"

export const addFav = (pj) => {
    return {type: ADD_FAV, payload: pj}
}

export const delFav = (id) => {
    return {type: DEL_FAV, payload: id}
}

// Crear una action-creator con el nombre "filterCards". Esta action-creator recibirá por parámetro un status.
//  La action que retornará tendrá un type llamado "FILTER", y dentro del payload irá el género recibido.

export const FILTER = "FILTER";
export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

// Crear una action-creator con el nombre "orderCards". Esta action-creator recibirá por parámetro un id. 
// La action que retornará tendrá un type llamado "ORDER", y dentro del payload irá el id recibido.
export const ORDER = "ORDER";
export const orderCards = (orden) => {
    return {type: ORDER, payload: orden}
}