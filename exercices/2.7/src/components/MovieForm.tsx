import { SyntheticEvent, useState } from "react";
import { Movie } from "../type";

interface MovieFormProps{
    onMovieAdded : (movie:Movie)=> void;
}

const MovieForm = ({onMovieAdded}:MovieFormProps) =>{
    const [title,setTitle] = useState("");
    const [director,setDirector] = useState("");
    const [duration,setDuration] = useState(0);
    const [imageUrl,setImageUrl] = useState("");
    const [description,setDescription] = useState("");
    const [budget,setBudget] = useState(0);

    const handleSubmit = (e:SyntheticEvent)=>{
        e.preventDefault();
        onMovieAdded({title,director,duration,imageUrl,description,budget})
        setTitle("");
        setDirector("");
        setDuration(0);
        setImageUrl("");
        setDescription("");
        setBudget(0);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre : </label>
                    <input
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                     />
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm;