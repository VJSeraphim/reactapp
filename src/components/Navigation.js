import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return <div className="nav-container">
        <Link to="/">Home <br></br><br></br></Link>
        <Link to="/about">About</Link>
    </div>
}

export default Navigation