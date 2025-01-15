import { Movie } from "../type";
import { Link } from "react-router-dom";

interface MovieTitleListProps {
    movies: Movie[];
}

const MovieTitleList = ({ movies }: MovieTitleListProps) => {
    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieTitleList;