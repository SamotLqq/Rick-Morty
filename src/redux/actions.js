export const ADD_FAV = "ADD_FAV"
export const DEL_FAV = "REM_FAV"

export const addFav = (pj) => {
    return {type: ADD_FAV, payload: pj}
}

export const delFav = (id) => {
    return {type: DEL_FAV, payload: id}
}