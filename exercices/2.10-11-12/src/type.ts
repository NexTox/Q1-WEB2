interface Movie {
    id: number;
    title: string;
    director: string;
    duration: number;
    imageUrl?: string;
    description?: string;
    budget?: number;
  }

  interface MovieContext {
    movies:Movie[];
    onMovieAdded : (movie:NewMovie)=>void;
  }

  type NewMovie = Omit<Movie, "id">;

  export type {NewMovie,Movie,MovieContext };