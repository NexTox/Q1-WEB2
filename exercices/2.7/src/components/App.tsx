import { useState } from 'react';
import './App.css'
import {Movie} from '../type';
import Footer from './Footer';
import Header from './Header';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import PageTitle from './Title';



function App() {

    const movie1 : Movie[] = [ 
      {
      title: "Bienvenue à NexChester",
      director:"NexToxTV",
      duration:200
    },
    {
      title: "Bienvenue à NexChester 2",
      director:"NexToxTV",
      duration:202
    },
    {
      title: "NeeexChester",
      director:"NexToxTV",
      duration:168
    }
  ];

  const [movies,setMovies] = useState(movie1);

  const onMovieAdded = (newMovie:Movie) => {
    setMovies([...movies,newMovie]);
  }


  return (
    <div>
      <Header urlLogo="">
        <div>Helloooo, voici votre liste pref</div>
      </Header>

      <PageTitle title='Helloooooo'/>

      <div>
      <MovieList movies={movies}/>
      <MovieForm onMovieAdded={onMovieAdded}/>
      </div>

      <Footer urlLogo=''>
        <div>FIN</div>
      </Footer>
    </div>
  )
}

export default App
