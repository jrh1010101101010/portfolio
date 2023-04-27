import { Link } from "react-router-dom"
import "../css/NavBar.css"


export default function NavBar(){
    return (
        <div className="nav-bar">
            <h2 className="name">JRH</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    )
}