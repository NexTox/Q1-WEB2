import './App.css'
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { NewMovie, MovieContext,Movie } from '../type';
import { useState, useEffect } from 'react';
import { getMovies, addMovie, deleteMovie } from '../utils/film-service';


function App() {
const [movies,setMovies] = useState<Movie[]>([]); 
const navigate = useNavigate();

const initMovies = async () => {
  try{
    const movies = await getMovies();
    setMovies(movies);
  }catch(error){
    console.error(error);
  }
}

useEffect(()=>{
  initMovies();
},[]);

const onMovieAdded= async (newMovies:NewMovie)=>{
  try{
    const movieToBeAdded = await addMovie(newMovies);
    console.log("Movie added:", movieToBeAdded);
    await initMovies();
    navigate("/movies");
  }catch(error){
    console.error(error);
  }
}

const onMovieDeleted = async (movie:Movie)=>{
  try{
    await deleteMovie(movie);
    console.log("Movie deleted:", movie);
    await initMovies();
  }catch(error){
    console.error(error);
  }
}

const movieContext : MovieContext = {
  movies,
  onMovieAdded,
  onMovieDeleted
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
