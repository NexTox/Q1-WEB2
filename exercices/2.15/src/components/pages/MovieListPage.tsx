import {MovieContext } from "../../type";
import {useOutletContext } from "react-router-dom";
import MovieList from "../MovieList";


const MovieListPage = () => {

  const {movies,onMovieDeleted} : MovieContext = useOutletContext();
    
    return(
        <div>
            <h1>Movie List</h1>
            <MovieList movies={movies} onMovieDeleted={onMovieDeleted} />
        </div>
    )
}

export default MovieListPage;   