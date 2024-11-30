import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './components/App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CinemaPage from "./components/pages/CinemaPage.tsx";
import MovieListPage from "./components/pages/MovieListPage.tsx";
import AddMoviePage from "./components/pages/AddMoviePage.tsx";
import MoviesPage from "./components/pages/MoviesPage.tsx";

const router = createBrowserRouter([
{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/cinema",
      element:<CinemaPage/>,
    },
    {
      path:"/movies",
      element:<MovieListPage/>,
    },
    {
      path:"/add-movie",
      element:<AddMoviePage/>,
    },
    {
      path:"/movies/:id",
      element:<MoviesPage/>
    }
  ]
}
]
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
