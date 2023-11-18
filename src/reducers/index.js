import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from "../actions";

const initialState = {
    movie_list: [],
    favourites: [],
    showFavourites: false
}

export default function movies (state= initialState, action){
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