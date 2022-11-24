import { ADD_FAV, DEL_FAV } from "./actions";

const initialState = {
  myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload]};
        case DEL_FAV:
            let myFavorites = state.myFavorites;
            let myFavoritesFilterList = myFavorites.filter(e => e.detailId !== Number(action.payload));
            return {...state, myFavorites: myFavoritesFilterList};
        default:
            return state;
    }
}

export default rootReducer