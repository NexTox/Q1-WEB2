import {Link} from "react-router-dom"

const NavBar = ()=>{
    return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cinema">Cinema</Link>
        <Link to="/movies">MovieListPage</Link>
        <Link to="/add-movie">Add-Movie</Link>
    </nav>
    )
}

export default NavBar;