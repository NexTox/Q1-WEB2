import { Movie } from "../type";
import { Link } from "react-router-dom";

interface MovieTitleListProps {
    Movie: Movie[];
}

const MovieTitleList = ({ Movie }: MovieTitleListProps) => {
    return (
        <div>
            <ul>
                {Movie.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieTitleList;