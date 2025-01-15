import AddMovieForm from '../AddMovies';
import { MovieContext } from '../../type';
import { useOutletContext } from 'react-router-dom';

const AddMoviePage = () => {
    const {onMovieAdded}: MovieContext = useOutletContext();
    return (
        <div>
            <h1>Add a New Movie</h1>
            <AddMovieForm  onMovieAdded={onMovieAdded}/>
        </div>
    );
};

export default AddMoviePage;