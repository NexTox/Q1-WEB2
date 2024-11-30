import './App.css'
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { NewMovie, MovieContext,Movie } from '../type';
import { useState } from 'react';


const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    imageUrl: "https://example.com/inception.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    budget: 160000000
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl: "https://example.com/matrix.jpg",
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    budget: 63000000
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    imageUrl: "https://example.com/interstellar.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    budget: 165000000
  }
];

function App() {
const [movies,setMovies] = useState(defaultMovies);
const navigate = useNavigate();

const onMovieAdded= (newMovies:NewMovie)=>{
  const MaxId = Math.max(...movies.map((movie)=>movie.id)) + 1;
  const newMovieWithId = {id: MaxId, ...newMovies};
  setMovies([...movies,newMovieWithId]);
  navigate("/movies");
}

const movieContext : MovieContext = {
  movies,
  onMovieAdded,
};

  return (
    <div>
      <Header urlLogo="https://example.com/logo.png">
        <h1>...</h1>
        <NavBar />
      </Header>
      <div>
        <Outlet context={movieContext}/>
      </div>

      <Footer urlLogo="https://example.com/logo.png">
        <div>FIN</div>
      </Footer>
    </div>
  )
}

export default App
