import {Movie} from "../type";


interface MovieProps {
    movie : Movie;
}

const MovieCard = ({movie} : MovieProps) =>{
    return(
        <div>
            <div>
                <h3>{movie.title}</h3>
                {movie.imageUrl && (
                    <img src={movie.imageUrl} alt={movie.title}/>
                )}
                {movie.description && (
                    <p>{movie.description}</p>
                )}
                <p>{movie.director}</p>
                <p>{movie.duration} minutes</p>
                {movie.budget && (
                    <p> <strong>Budget : </strong>{movie.budget}</p>
                )}
            </div>
        </div>
    );
};


export default MovieCard;