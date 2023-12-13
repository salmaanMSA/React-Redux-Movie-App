import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from "../actions";

const initialMovieState = {
    movie_list: [],
    favourites: [],
    showFavourites: false
}

export function movies (state= initialMovieState, action){
    switch (action.type){
        case ADD_MOVIES:      
            return {
                ...state,
                movie_list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            console.log(state.favourites)
            const updatedFavorites = state.favourites.filter(
                (movie) => movie.Title !== action.movie.Title
            );
            console.log(updatedFavorites);
            return {
                ...state,
                favourites: updatedFavorites,
            };
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.bool
            }
        default:
            return state;

    }
}

const initialSearchState = {
    result: {}
}

export function searchReducer (state = initialSearchState, action){
    return state;
}

// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer (state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: searchReducer(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    searchReducer
})