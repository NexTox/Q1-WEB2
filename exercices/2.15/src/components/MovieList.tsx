import MovieCard from "./MovieCard";
import {Movie} from "../type";



interface MovieListCard {
    movies : Movie[]
    onMovieDeleted : (movie:Movie)=>void;
}

const MovieList = ({movies,onMovieDeleted}: MovieListCard)=>{

    return(
        <div>
        {movies.map((movie)=>(
            <MovieCard key={movie.title} movie={movie} onMovieDeleted={onMovieDeleted}/>
        ))}
        </div>
    )
}

export default MovieList;