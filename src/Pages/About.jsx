import React from "react";
import {Link} from "react-router-dom"

function About() {
    return(
        <div>
            <h1>This is the About Page</h1>
            <Link to="/">Click to go home</Link>
        </div>
    )
}

export default About;