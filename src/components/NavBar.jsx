import { Link } from "react-router-dom"
import "../css/NavBar.css"


export default function NavBar(){
    return (
        <div className="nav-bar">
            <h2 className="name">JRH</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contacts</a>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    )
}