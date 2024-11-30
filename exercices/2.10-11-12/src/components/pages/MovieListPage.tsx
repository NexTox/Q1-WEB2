import MovieTitleList from "../MovieTitleList";
import { Movie } from "../../type";

const MovieListPage = () => {
    const movies: Movie[] = [
        {
          id: 1,
          title: "HAIKYU-THE DUMPSTER BATTLE",
          director: "Susumu Mitsunaka",
          description:
            "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
          duration: 10
        },
        {
          id: 2,
          title: "GOODBYE JULIA",
          director: "Mohamed Kordofani",
          description:
            "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
          duration: 10
        },
        {
          id: 3,
          title: "INCEPTION",
          director: "Christopher Nolan",
          description:
            "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
          duration: 10
        },
        {
          id: 4,
          title: "PARASITE",
          director: "Bong Joon-ho",
          description:
            "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
          duration: 10
        },
      ];
    
    return(
        <div>
            <h1>Movie List</h1>
            <MovieTitleList Movie={movies} />
        </div>
    )
}

export default MovieListPage;   