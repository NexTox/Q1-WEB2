import  {NewMovie,Movie} from "../type";

async function getMovies(): Promise<Movie[]> {
    try{
        const response = await fetch("/api/films");
        if(!response.ok){
            throw new Error("Error : ${response.statusText}");
        }
        const movies = await response.json();
        return movies;
    }catch(error){
        console.error(error);
        throw error;
    }
};

const addMovie = async (movie: NewMovie): Promise<void> => {
    try{
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        };
        const response = await fetch("/api/films", options);
        if(!response.ok){
            throw new Error("Error : ${response.statusText}");
        }
        const createdMovie = await response.json();
        return createdMovie;
    }catch(error){
        console.error(error);
        throw error;
    }
};

const deleteMovie = async (movie:Movie): Promise<void> => {
    try{
        const options = {
            method: "DELETE",
        };
        const response = await fetch(`/api/films/${movie.id}`,options);
        if(!response.ok){
            throw new Error("Error : ${response.statusText}");
        }
    }catch(error){
        console.error(error);
        throw error;
    }
}

export {getMovies,addMovie,deleteMovie};