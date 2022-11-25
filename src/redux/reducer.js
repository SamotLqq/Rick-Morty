import { ADD_FAV, DEL_FAV, ORDER, TODOS } from "./actions";
import { FILTER } from "./actions";
export const ASCENDENTE = "Ascendente";
export const DESCENDENTE = "Descendente";


// Crea un nuevo estado global (dentro del initialState) llamado allCharacters. Este debe ser un arreglo vacío.

// Dentro del caso ADD_FAV estás haciendo una copia de tu estado myFavorites. Tendrás que reemplazar 
// esto por una copia de tu nuevo estado allCharacters. Una vez hecho esto, en el estado que retorna este caso
//  deberás agregar también la propiedad allCharacters e igualarla a la copia de tu estado.

// Crea un caso con el nombre "FILTER". Haz una copia de tu estado "allCharacters" mediante destructuring. 
// Filtra aquellos personajes que tengan el mismo género que recibes por payload. Retorna tu estado global,
//  pero que la propiedad myFavorites sea igual al filtrado que haz hecho.

// Crea un caso con el nombre "ORDER". Haz una copia de tu estado "allCharacters" mediante destructuring. 
// Utiliza el método sort de arreglos para ordenar tus personajes en base al número de su ID. 
// Si el payload es "Ascendiente", entonces de menor a mayor. Si el payload es "Descendiente,
//  entonces de mayor a menor. Retorna tu estado global, pero que la propiedad myFavorites sea igual al ordenamiento que haz hecho.

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload], allCharacters: [...state.allCharacters, action.payload]};
        case DEL_FAV:
            let myFavorites = state.myFavorites;
            let myFavoritesFilterList = myFavorites.filter(e => e.detailId !== Number(action.payload));
            return {...state, myFavorites: myFavoritesFilterList, allCharacters: myFavoritesFilterList};
        case FILTER:
            let copia1 = [...state.allCharacters];
            let filterGender = copia1.filter(e => e.gender === action.payload);
            return {...state, myFavorites: filterGender};
        case ORDER:
            let copia2 = [...state.allCharacters];
            copia2.sort((pj1, pj2) => {
                if (action.payload === DESCENDENTE) {
                    if (pj1.detailId < pj2.detailId) {
                        return 1;
                    }
                    else return -1
                }
                else {
                    if (pj1.detailId > pj2.detailId) {
                        return 1;
                    }
                    else return -1
                }
            })
            return {...state, myFavorites: copia2};
        default:
            return state;
    }
}

export default rootReducer