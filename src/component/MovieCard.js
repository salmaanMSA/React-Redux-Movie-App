import React from "react";
import { addFavourite, removeFavourite } from "../actions";


class MovieCard extends React.Component {

    handleAddFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));
    }
    handleRemoveFavouriteClick= () => {
        const { movie } = this.props;
        console.log(movie);
        this.props.dispatch(removeFavourite(movie));
    }

    render () {
        const { movie, isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite ?
                            <button className="unfavourite-btn" onClick={this.handleRemoveFavouriteClick}>UnFavourite</button>
                            :
                            <button className="favourite-btn" onClick={this.handleAddFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;