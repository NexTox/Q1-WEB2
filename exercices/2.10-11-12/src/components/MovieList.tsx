import MovieCard from "./MovieCard";
import {Movie} from "../type";

interface MovieListCard {
    movies : Movie[]
}

const MovieList = ({movies}: MovieListCard)=>{
    return(
        <div>
        {movies.map((movie)=>(
            <MovieCard key={movie.title} movie={movie}/>
        ))}
        </div>
    )
}

export default MovieList;