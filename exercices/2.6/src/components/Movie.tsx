import { useState } from "react";
import { Movie } from "../type";

interface MovieProps {
    movie: Movie;
  }

  const Movie1 = ({movie}: MovieProps) => {
    const [isClick ,setisClick] = useState(false);

    return(
        <div>
            <li onClick={()=> setisClick(!isClick)}>
                <p>
                    {movie.title} by {movie.director}
                </p>
                <p>
                    {isClick ? movie.description : null}
                </p>
            </li>
        </div>
    )
  }

  export default Movie1;