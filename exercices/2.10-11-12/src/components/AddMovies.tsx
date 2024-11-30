import { SyntheticEvent, useState } from "react";
import { NewMovie } from "../type";


interface AddMovieFormProps{
    onMovieAdded:(movie:NewMovie)=>void;
}

const AddMovieForm = ({onMovieAdded}:AddMovieFormProps)=>{
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        onMovieAdded({
            title,
            director,
            duration,
            imageUrl,
            description,
            budget
        });
        setTitle("");
        setDirector("");
        setDuration(0);
        setImageUrl("");
        setDescription("");
        setBudget(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Director:</label>
                <input type="text" name="director" value={director} onChange={(e) => setDirector(e.target.value)} />
            </div>
            <div>
                <label>Duration:</label>
                <input type="number" name="duration" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Budget:</label>
                <input type="number" name="budget" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovieForm;