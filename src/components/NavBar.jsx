import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <div className="nav-bar">
            <h2 className="name">JRH</h2>
            <div className="links">
                <Link to="/"></Link>
                <Link to="/about"> about me</Link>
            </div>
        </div>
    )
}