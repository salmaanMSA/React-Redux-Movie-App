import React from "react";
import Navbar from "./Navbar";
import { data } from '../data'
import MovieCard from "./MovieCard";
import { addMovies, showFavourite } from  '../actions';

class App extends React.Component {
  componentDidMount () {
    const {store} = this.props;
    console.log("Before Mount:", store.getState());
    store.subscribe(() => {
      console.log("updated..!", store.getState());
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1){
      return true;
    }
    return false;
  }

  handleTabSwitch = (val) => {
    this.props.store.dispatch(showFavourite(val));
  }

  render() {
    const { movies } = this.props.store.getState();
    console.log(this.props.store.getState());
    const { movie_list, favourites, showFavourites } = movies;
    const movies_items = showFavourites ? favourites : movie_list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() =>  this.handleTabSwitch(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.handleTabSwitch(true)}>Favourites</div>
          </div>

          <div className="list">
            {movies_items.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
