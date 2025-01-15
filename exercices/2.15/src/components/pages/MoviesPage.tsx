import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../type";
import MovieCard from "../MovieCard";

const MoviesPage = () =>{

  const {movies,onMovieDeleted} : MovieContext = useOutletContext();

  const match = useMatch("/movies/:id");
  const movieID = Number(match?.params.id);

  if(isNaN(movieID)){
    return <p>Movie not found</p>
  }

  const movieFoud = movies.find((movie)=>{return movie.id === movieID})

  if(!movieFoud){
    return <p>Movie not found</p>
  }


    return(
      <div>
        <MovieCard movie={movieFoud} onMovieDeleted={onMovieDeleted}/>
      </div>
    )
}

export default MoviesPage;