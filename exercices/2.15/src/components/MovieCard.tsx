import {Movie} from "../type";


interface MovieProps {
    movie : Movie;
    onMovieDeleted : (movie:Movie)=>void;
}

const MovieCard = ({ movie,onMovieDeleted }: MovieProps) => {
    return (
      <div className="card">
       
        <div className="card-body">
          <h3 className="card-title">{movie.title}</h3>
          {movie.imageUrl && (
          <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
        )}
          <p className="card-text">
            <strong>Réalisateur :</strong> {movie.director}
          </p>
          <p className="card-text">
            <strong>Durée :</strong> {movie.duration} minutes
          </p>
          {movie.budget && (
            <p className="card-text">
              <strong>Budget :</strong> {movie.budget} millions de dollars
            </p>
          )}
          {movie.description && (
            <p className="card-text">
              <strong>Description :</strong> {movie.description}
            </p>
          )}
          <p>
            <button onClick={()=>onMovieDeleted(movie)}>delete</button>
          </p>
        </div>
      </div>
    );
  };


export default MovieCard;