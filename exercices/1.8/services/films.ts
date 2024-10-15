import path from "node:path";

import {Film, NewFilm } from "../types";

import { parse, serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/drinks.json");

const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
    {
      id: 3,
      title: "Summer Wars",
      director: "Mamoru Hosoda",
      duration: 114,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
      description:
        "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
      budget: 18.7,
    },
    {
      id: 4,
      title: "The Meyerowitz Stories",
      director: "Noah Baumbach",
      duration: 112,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
      description:
        "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
    },
    {
      id: 5,
      title: "her",
      director: "Spike Jonze",
      duration: 126,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      budget: 23,
    },
  ];

  const readAll = (minimumDuration : number | undefined = undefined): Film[] => {
    const films = parse(jsonDbPath,defaultFilms);
    if(!minimumDuration){
        return films;
    }
    const minimumDura = Number(minimumDuration);

    const filteredFilms = films.filter((film)=>{
        return film.duration >= minimumDura;
    });
    return filteredFilms;
  }

  const readOneFilm = (id: number): Film | undefined => {

    const films = parse(jsonDbPath, defaultFilms);
  
    const film = films.find((film) => film.id === id);
  
    if (!film) {
  
      return undefined;
  
    }
  
    return film;
  
  }

  const CreateOne = (newFilm: NewFilm): Film | undefined =>{
    const films = parse(jsonDbPath,defaultFilms);

    const existingFilm = films.find((film)=>
        film.title.toLowerCase === newFilm.title.toLowerCase &&
        film.director.toLowerCase === newFilm.director.toLowerCase;
    );

    if(existingFilm){
        return undefined;
    }

    const film = { id: nextId(), ...newFilm};
    defaultFilms.push(film);
    serialize(jsonDbPath,films)
    return film;
  }
  




  const nextId = () =>
    parse(jsonDbPath, defaultFilms).reduce(
      (maxId, film) => Math.max(maxId, film.id),
      0
    ) + 1;
  
  export {
  
    readAll,
  
    readOneFilm,
  
    CreateOne,
  
    deleteOneDrink,
  
    updateOneDrink,
  
  };