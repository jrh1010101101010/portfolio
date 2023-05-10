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
                <a href="#contacts">Contact</a>
                <Link to='/blog'>Blog</Link>
                <a href="https://drive.google.com/file/d/1I3f4ejj7OtCKGQQTgNAtLftTjdqGhlxi/view?usp=share_link">CV</a>
            </div>
        </div>
    )
}